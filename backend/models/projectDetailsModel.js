const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectDetailsSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["", "image", "video"],
    default: "",
  },
  media: {
    type: Schema.Types.Mixed,
    required: function () {
      return this.type === "image" || this.type === "video";
    },
  },
  project_id: {
    type: mongoose.Types.ObjectId,
    ref: "Projects",
    required: true,
  },
  sequence: {
    type: Number,
  },
});

const projectDetailsModel = mongoose.model(
  "ProjectDetails",
  projectDetailsSchema
);

module.exports = projectDetailsModel;
