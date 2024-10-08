// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import VideoPlayer from "./Videoplayer";
// import "../style/user.css"; // Ensure your styles are here
// import "bootstrap/dist/css/bootstrap.min.css";

// const isIPhoneSafari = () => {
//   return (
//     /iP(ad|hone|od)/.test(navigator.platform) &&
//     /Safari/i.test(navigator.userAgent) &&
//     !/CriOS/i.test(navigator.userAgent)
//   );
// };

// const Lightboxcomponent = () => {
//   const { project_name } = useParams();
//   const [media, setMedia] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [modalVisible, setModalVisible] = useState(false);
//   const isSafariOnIPhone = isIPhoneSafari(); // Check if the user is on iPhone Safari
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [posterImg, setPosterImg] = useState(null);

//   useEffect(() => {
//     const fetchProjectMedia = async () => {
//       try {
//         const encodedProjectName = encodeURIComponent(project_name);

//         const response = await axios.get(
//           `${apiUrl}/api/project_detail/project_media/?project_name=${encodedProjectName}`
//         );

//         const projectDetail = response.data || {};
//         const { mediaData = [] } = projectDetail;

//         // Ensure sorting by sequence
//         const sortedMedia = mediaData.sort(
//           (a, b) => a.media.sequence - b.media.sequence
//         );

//         console.log("Sorted Media:", sortedMedia);

//         setMedia(sortedMedia);
//       } catch (error) {
//         console.error("Error fetching project media:", error);
//       }
//     };

//     fetchProjectMedia();
//   }, [project_name, apiUrl]);

//   const handleImageClick = (index) => {
//     setActiveIndex(index);
//     setModalVisible(true);
//   };

//   const handleModalClose = () => {
//     setModalVisible(false);
//   };

//   const handleCarouselControl = (direction) => {
//     setActiveIndex((prevIndex) => {
//       const newIndex =
//         direction === "next"
//           ? (prevIndex + 1) % media.length
//           : (prevIndex - 1 + media.length) % media.length;
//       return newIndex;
//     });
//   };

//   useEffect(() => {
//     if (modalVisible) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }

//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, [modalVisible]);

//   const getPosterForMedia = (index) => {
//     // Assuming the poster images are ordered and correspond to the media array
//     return posterImg[index]
//       ? `${apiUrl}/${posterImg[index].filepath.replace("\\", "/")}`
//       : null;
//   };

//   return (
//     <div className="lightbox_gallery">
//       <div className="container text-center py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-12">
//             <div className="row justify-content-center">
//               {media.map((item, index) => (
//                 <Link
//                   to="#"
//                   key={index}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleImageClick(index);
//                   }}
//                   className="col-sm-4"
//                 >
//                   <div className="gal-box">
//                     {item.media.iframe ? (
//                       <VideoPlayer
//                         src={item.media.iframe}
//                         className="card-img-top w-100"
//                         playsInline
//                         preload="auto"
//                         startTime={10}
//                         poster={
//                           isSafariOnIPhone
//                             ? `${apiUrl}/${item.posterImg.filepath.replace(
//                                 "\\",
//                                 "/"
//                               )}`
//                             : "/images/about-bg.jpg"
//                         }
//                       />
//                     ) : (
//                       <img
//                         src={`${apiUrl}/${item.media.filepath}`}
//                         alt={`${item.media.filename}`}
//                         className="card-img-top"
//                         loading="lazy"
//                       />
//                     )}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {modalVisible && (
//         <>
//           <div className="modal-overlay" onClick={handleModalClose}></div>
//           <div
//             className="modal fade show d-block"
//             id="exampleLightbox"
//             tabIndex="-1"
//             aria-labelledby="exampleLightboxLabel"
//             aria-hidden="true"
//             onClick={(e) => {
//               if (e.target === e.currentTarget) {
//                 handleModalClose();
//               }
//             }}
//           >
//             <div className="modal-dialog modal-xl modal-dialog-centered bg-dark">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <button
//                     type="button"
//                     className="btn-close"
//                     onClick={handleModalClose}
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <div
//                     id="lightboxExampleCarousel"
//                     className="carousel slide"
//                     data-bs-ride="carousel"
//                   >
//                     <div className="carousel-inner ratio ratio-16x9 bg-dark">
//                       {media.map((item, index) => (
//                         <div
//                           key={index}
//                           className={`carousel-item text-center ${
//                             index === activeIndex ? "active" : ""
//                           }`}
//                         >
//                           {item.media.iframe ? (
//                             <div className="embed-responsive embed-responsive-16by9 bg-dark">
//                               {index === activeIndex && (
//                                 <video
//                                   src={item.media.iframe}
//                                   title={`Media ${index}`}
//                                   allowFullScreen
//                                   className="embed-responsive-item"
//                                   controls
//                                   playsInline
//                                 />
//                               )}
//                             </div>
//                           ) : (
//                             <img
//                               src={`${apiUrl}/${item.media.filepath}`}
//                               alt={`Media ${index}`}
//                               className="img-fluid mh-100"
//                               loading="lazy"
//                             />
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                     <button
//                       className="carousel-control-prev"
//                       type="button"
//                       data-bs-target="#lightboxExampleCarousel"
//                       data-bs-slide="prev"
//                       onClick={() => handleCarouselControl("prev")}
//                     >
//                       <span
//                         className="carousel-control-prev-icon"
//                         aria-hidden="true"
//                       ></span>
//                       <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button
//                       className="carousel-control-next"
//                       type="button"
//                       data-bs-target="#lightboxExampleCarousel"
//                       data-bs-slide="next"
//                       onClick={() => handleCarouselControl("next")}
//                     >
//                       <span
//                         className="carousel-control-next-icon"
//                         aria-hidden="true"
//                       ></span>
//                       <span className="visually-hidden">Next</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Lightboxcomponent;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "./Videoplayer";
import "../style/user.css"; // Ensure your styles are here
import "bootstrap/dist/css/bootstrap.min.css";

const isIPhoneSafari = () => {
  return (
    /iP(ad|hone|od)/.test(navigator.platform) &&
    /Safari/i.test(navigator.userAgent) &&
    !/CriOS/i.test(navigator.userAgent)
  );
};

const Lightboxcomponent = () => {
  const { project_name } = useParams();
  const [media, setMedia] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const isSafariOnIPhone = isIPhoneSafari(); // Check if the user is on iPhone Safari
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProjectMedia = async () => {
      try {
        const encodedProjectName = encodeURIComponent(project_name);
        const response = await axios.get(
          `${apiUrl}/api/project_detail/project_media/?project_name=${encodedProjectName}`
        );

        const projectDetail = response.data || {};
        const { mediaData = [] } = projectDetail;

        // Ensure sorting by sequence
        const sortedMedia = mediaData.sort(
          (a, b) => a.media.sequence - b.media.sequence
        );

        console.log("Sorted Media:", sortedMedia);
        setMedia(sortedMedia);
      } catch (error) {
        console.error("Error fetching project media:", error);
      }
    };

    fetchProjectMedia();
  }, [project_name, apiUrl]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleCarouselControl = (direction) => {
    setActiveIndex((prevIndex) => {
      const newIndex =
        direction === "next"
          ? (prevIndex + 1) % media.length
          : (prevIndex - 1 + media.length) % media.length;
      return newIndex;
    });
  };

  useEffect(() => {
    if (modalVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modalVisible]);

  return (
    <div className="lightbox_gallery">
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row justify-content-center">
              {media.map((item, index) => (
                <Link
                  to="#"
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(index);
                  }}
                  className="col-sm-4"
                >
                  <div className="gal-box">
                    {item.media.iframe ? (
                      <VideoPlayer
                        src={item.media.iframe}
                        className="card-img-top w-100"
                        playsInline
                        preload="metadata" // Changed to "metadata"
                        startTime={10}
                        poster={
                          isSafariOnIPhone &&
                          (!item.posterImg || !item.posterImg.filepath)
                            ? "/images/default-poster.jpg" // Show default image if posterImg is missing
                            : item.posterImg
                            ? `${apiUrl}/invalid-path/${item.posterImg.filepath.replace(
                                "\\",
                                "/"
                              )}`
                            : "/images/default-poster.jpg" // Fallback to default image if posterImg is invalid
                        }
                      />
                    ) : (
                      <img
                        src={`${apiUrl}/${item.media.filepath}`}
                        alt={`${item.media.filename}`}
                        className="card-img-top"
                        loading="lazy"
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <>
          <div className="modal-overlay" onClick={handleModalClose}></div>
          <div
            className="modal fade show d-block"
            id="exampleLightbox"
            tabIndex="-1"
            aria-labelledby="exampleLightboxLabel"
            aria-hidden="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                handleModalClose();
              }
            }}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered bg-dark">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleModalClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div
                    id="lightboxExampleCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner ratio ratio-16x9 bg-dark">
                      {media.map((item, index) => (
                        <div
                          key={index}
                          className={`carousel-item text-center ${
                            index === activeIndex ? "active" : ""
                          }`}
                        >
                          {item.media.iframe ? (
                            <div className="embed-responsive embed-responsive-16by9 bg-dark">
                              {index === activeIndex && (
                                <video
                                  src={item.media.iframe}
                                  title={`Media ${index}`}
                                  allowFullScreen
                                  className="embed-responsive-item"
                                  controls
                                  playsInline
                                />
                              )}
                            </div>
                          ) : (
                            <img
                              src={`${apiUrl}/${item.media.filepath}`}
                              alt={`Media ${index}`}
                              className="img-fluid mh-100"
                              loading="lazy"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#lightboxExampleCarousel"
                      data-bs-slide="prev"
                      onClick={() => handleCarouselControl("prev")}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#lightboxExampleCarousel"
                      data-bs-slide="next"
                      onClick={() => handleCarouselControl("next")}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lightboxcomponent;
