const path = require("path");
const projectDetailsModel = require("../models/projectDetailsModel");
const projectModel = require("../models/projectModel");
const validator = require("validator");

const { isURL } = require("url");

const createProjectDetail = async (req, res) => {
  try {
    const { project_name, media: mediaField } = req.body;

    // Extract files from the request
    const posterImgFile = req.files?.posterImg ? req.files.posterImg[0] : null;
    const mediaFile = req.files?.media ? req.files.media[0] : null;

    // Log the values to ensure they're being received correctly
    console.log("Project Name:", project_name);
    console.log("Media File:", mediaFile);
    console.log("Media Field (URL):", mediaField);

    let mediaData = {
      filename: null,
      filepath: null,
      iframe: null,
    };
    let fileType = "";

    // Function to check if the input is a URL
    const isURL = (str) => {
      try {
        new URL(str);
        return true;
      } catch (error) {
        return false;
      }
    };

    // Handle media field
    if (mediaField && isURL(mediaField)) {
      fileType = "video"; // Set fileType to "video" for iframe URLs
      mediaData = {
        filename: null,
        filepath: null,
        iframe: mediaField.trim(),
      };

      // Ensure posterImg is provided when media is an iframe URL
      if (!posterImgFile) {
        return res.status(400).json({
          message: "Poster image is required when an iFrame URL is provided.",
        });
      }
    } else if (mediaFile) {
      fileType = "image"; // Assuming media is an image
      const isWebPImage = (file) => {
        const extname = path.extname(file.originalname).toLowerCase();
        return extname === ".webp";
      };

      if (!isWebPImage(mediaFile)) {
        return res.status(400).json({
          message: "Unsupported file type. Please upload a WebP image.",
        });
      }

      mediaData = {
        filename: mediaFile.originalname,
        filepath: mediaFile.path,
        iframe: null,
      };
    } else {
      // Handle the case where neither media nor file is provided
      return res.status(400).json({
        message: "Please provide either an iFrame URL or an image.",
      });
    }

    // Custom validation for posterImg
    if (fileType === "video" && !posterImgFile) {
      return res.status(400).json({
        message: "Poster image is required for video media.",
      });
    }

    const posterImgData = posterImgFile
      ? {
          filename: posterImgFile.originalname,
          filepath: posterImgFile.path,
        }
      : null; // Poster image is not required for image media

    // Find the project_id based on project_name
    const project = await projectModel.findOne({ project_name });
    if (!project) {
      return res.status(404).json({
        message: `Project with name '${project_name}' not found.`,
      });
    }

    // Get the total number of existing project details
    const totalProjectImg = await projectDetailsModel.countDocuments({
      project_name,
    });

    const newProjectDetail = new projectDetailsModel({
      project_name,
      media: mediaData,
      type: fileType,
      project_id: project._id,
      sequence: totalProjectImg + 1,
      posterImg: posterImgData,
    });

    await newProjectDetail.save();

    return res.status(200).json({
      message: "Added project details successfully.",
      newProjectDetail,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding project details due to ${error.message}`,
    });
  }
};

const updateProjectDetail = async (req, res) => {
  try {
    const projectId = req.params._id;
    const { project_name, media, sequence, description, type } = req.body;

    // Ensure project name and type are present
    if (!project_name) {
      return res.status(400).json({ message: "Project name is required" });
    }
    if (!type) {
      return res.status(400).json({ message: "Type field is required" });
    }

    // Retrieve files
    const mediaFile = req.files?.media ? req.files.media[0] : null;
    const posterImgFile = req.files?.posterImg ? req.files.posterImg[0] : null;

    // Fetch existing project detail
    const existingProjectDetail = await projectDetailsModel.findById(projectId);
    if (!existingProjectDetail) {
      return res.status(404).json({ message: "Project Detail not found." });
    }

    // Step 1: Update project_name for all entries with the same project_id
    const project = await projectModel.findOne({ project_name });
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }

    await projectDetailsModel.updateMany(
      { project_id: existingProjectDetail.project_id },
      { $set: { project_name } }
    );

    // Step 2: Prepare media data
    let mediaData = {
      filename: existingProjectDetail.media.filename,
      filepath: existingProjectDetail.media.filepath,
      iframe: existingProjectDetail.media.iframe,
    };

    // Validate media file or URL based on type
    if (mediaFile) {
      // Validate for specific types if necessary (e.g., WebP for images)
      if (
        type === "image" &&
        path.extname(mediaFile.originalname).toLowerCase() !== ".webp"
      ) {
        return res.status(400).json({
          message: "Unsupported file type. Please upload a WebP image.",
        });
      }

      mediaData = {
        filename: mediaFile.originalname,
        filepath: mediaFile.path,
        iframe: "",
      };
    } else if (media !== undefined && media !== null) {
      const trimmedMedia = typeof media === "string" ? media.trim() : media;

      // Check if media is a valid URL
      const isURL = (str) => {
        try {
          new URL(str);
          return true;
        } catch (error) {
          return false;
        }
      };

      if (trimmedMedia && !isURL(trimmedMedia)) {
        return res.status(400).json({ message: "Invalid media URL." });
      }

      mediaData = {
        filename: null,
        filepath: null,
        iframe: trimmedMedia,
      };
    }

    // Step 3: Handle sequence updates
    if (sequence && sequence !== existingProjectDetail.sequence) {
      const projectDetails = await projectDetailsModel
        .find({ project_id: existingProjectDetail.project_id })
        .sort({ sequence: 1 });

      let updateOperations = [];
      let maxSequence = projectDetails.length;

      if (sequence > maxSequence) {
        return res.status(400).json({
          message: `Invalid sequence. The sequence cannot be greater than ${maxSequence}.`,
        });
      }

      projectDetails.forEach((detail) => {
        if (detail._id.toString() !== existingProjectDetail._id.toString()) {
          if (
            detail.sequence >= sequence &&
            detail.sequence < existingProjectDetail.sequence
          ) {
            updateOperations.push({
              updateOne: {
                filter: { _id: detail._id },
                update: { $inc: { sequence: 1 } },
              },
            });
          } else if (
            detail.sequence > existingProjectDetail.sequence &&
            detail.sequence <= sequence
          ) {
            updateOperations.push({
              updateOne: {
                filter: { _id: detail._id },
                update: { $inc: { sequence: -1 } },
              },
            });
          }
        }
      });

      if (updateOperations.length > 0) {
        await projectDetailsModel.bulkWrite(updateOperations);
      }
    }

    // Step 4: Update the specific project detail entry with new values
    const updatedFields = {
      project_name,
      project_id: project._id,
      media: mediaData,
      type: mediaData.filename ? "image" : "video",
      sequence: sequence || existingProjectDetail.sequence,
      description: description || existingProjectDetail.description,
      posterImg: posterImgFile
        ? {
            filename: posterImgFile.originalname,
            filepath: posterImgFile.path,
          }
        : existingProjectDetail.posterImg,
    };

    const updatedProjectDetail = await projectDetailsModel.findByIdAndUpdate(
      projectId,
      updatedFields,
      { new: true }
    );

    // Check if update was successful
    if (!updatedProjectDetail) {
      return res.status(404).json({ message: "Project Detail not found" });
    }

    res.status(200).json({
      message: "Project details updated successfully.",
      updatedProjectDetail,
    });
  } catch (error) {
    console.error("Error updating project detail:", error);
    res.status(500).json({ message: `An error occurred: ${error.message}` });
  }
};

const getProjectMediaByName = async (req, res) => {
  try {
    const project_name = req.query.project_name;

    // Normalize project name
    const projectName = project_name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
      .trim();

    if (!projectName) {
      return res.status(400).json({ message: "Project Name is required." });
    }

    // Fetch project details by name
    const projectDetails = await projectDetailsModel.find({
      project_name: projectName,
    });

    if (!projectDetails || projectDetails.length === 0) {
      return res.status(404).json({
        message: `No project media found for the given project name ${project_name}`,
      });
    }

    // Structure the response data and sort by sequence
    const mediaData = projectDetails
      .map((detail) => ({
        media: detail.media,
        posterImg: detail.posterImg,
        sequence: detail.sequence,
      }))
      .sort((a, b) => a.sequence - b.sequence); // Sort by sequence

    return res.status(200).json({
      message: "Project details media fetched and sorted successfully.",
      mediaData,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching project detail media due to ${error.message}`,
    });
  }
};

const getProjectDetails = async (req, res) => {
  try {
    // const projectDetails = await projectDetailsModel
    //   .find()
    //   .sort({ sequence: 1 })
    //   .populate("project_id", "project_name");

    const projectDetails = await projectDetailsModel.aggregate([
      {
        $lookup: {
          from: "projects",
          localField: "project_id",
          foreignField: "_id",
          as: "project",
        },
      },
      {
        $unwind: "$project",
      },
      {
        $sort: {
          "project.project_name": 1,
          sequence: 1,
        },
      },
    ]);

    console.log(projectDetails); // Log the populated project details

    if (projectDetails.length === 0) {
      return res.status(400).json({
        message: "No project details are created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All project details fetched successfully.",
      count: projectDetails.length,
      projectDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching project details due to ${error.message}`,
    });
  }
};

const getProjectDetail = async (req, res) => {
  try {
    const projectDetail = await projectDetailsModel.findById(req.params._id);
    console.log(req.params._id);
    if (!projectDetail) {
      return res.status(400).json({
        message: "No project detail is created with this id.",
      });
    }

    return res.status(200).json({
      message: "project detail fetched successfully.",
      projectDetail,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching project detail due to ${error.message}`,
    });
  }
};

const getTotalCount = async (req, res) => {
  try {
    const projectName = req.params.project_name;
    const count = await projectDetailsModel.countDocuments({
      project_name: projectName,
    });
    res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting project detail due to ${error.message}`,
    });
  }
};

// const deleteProjectDetail = async (req, res) => {
//   try {
//     const projectDetailExists = await projectDetailsModel.findById({
//       _id: req.params._id,
//     });

//     if (projectDetailExists.length === 0) {
//       return res.status(400).json({
//         message: "No project details are created. Kindly create one.",
//       });
//     }

//     const deletedProjectDetail = await projectDetailsModel.findOneAndDelete({
//       _id: req.params._id,
//     });

//     return res.status(200).json({
//       message: "project detail deleted successfully.",
//       deletedProjectDetail,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Error in deleting project detail due to ${error.message}`,
//     });
//   }
// };

// const deleteProjectDetail = async (req, res) => {
//   try {
//     const projectDetail = await projectDetailsModel.findById(req.params._id);

//     if (!projectDetail) {
//       return res.status(404).json({
//         message: "Project detail not found.",
//       });
//     }

//     const deletedSequence = projectDetail.sequence;
//     const projectName = projectDetail.project_name;

//     await projectDetailsModel.deleteOne({ _id: req.params._id });

//     // Update sequence for subsequent entries of the same project name
//     await projectDetailsModel.updateMany(
//       { project_name: projectName, sequence: { $gt: deletedSequence } },
//       { $inc: { sequence: -1 } }
//     );

//     return res.status(200).json({
//       message: "Project detail deleted successfully.",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Error in deleting project detail due to ${error.message}`,
//     });
//   }
// };

const deleteProjectDetail = async (req, res) => {
  try {
    const projectDetail = await projectDetailsModel.findById(req.params._id);

    if (!projectDetail) {
      return res.status(404).json({
        message: "Project detail not found.",
      });
    }

    const deletedSequence = projectDetail.sequence;
    const projectName = projectDetail.project_name;

    await projectDetailsModel.deleteOne({ _id: req.params._id });

    // Update sequence for subsequent entries of the same project name
    await projectDetailsModel.updateMany(
      { project_name: projectName, sequence: { $gt: deletedSequence } },
      { $inc: { sequence: -1 } }
    );

    // Fetch updated project details after deletion and sequence update
    const updatedProjectDetails = await projectDetailsModel.aggregate([
      {
        $lookup: {
          from: "projects",
          localField: "project_id",
          foreignField: "_id",
          as: "project",
        },
      },
      {
        $unwind: "$project",
      },
      {
        $sort: {
          "project.project_name": 1,
          sequence: 1,
        },
      },
    ]);

    return res.status(200).json({
      message: "Project detail deleted successfully.",
      count: updatedProjectDetails.length,
      projectDetails: updatedProjectDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting project detail due to ${error.message}`,
    });
  }
};

module.exports = {
  createProjectDetail,
  updateProjectDetail,
  getProjectMediaByName,
  getProjectDetails,
  getProjectDetail,
  getTotalCount,
  deleteProjectDetail,
};
