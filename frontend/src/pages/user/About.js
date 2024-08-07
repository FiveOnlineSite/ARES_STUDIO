import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../../style/user.css";
import axios from "axios";
import VideoPlayer from "../../components/Videoplayer";
import { Helmet } from "react-helmet";
import Parse from "html-react-parser";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [teams, setTeams] = useState([]);
  const { id } = useParams(); // Use the correct about ID
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const response = await axios.get(`${apiUrl}/api/about`);
        setAboutData(response.data.abouts);
        console.log(response.data.abouts);
      } catch (error) {
        console.error("Error fetching about details:", error);
      }
    };

    const fetchTeams = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const response = await axios.get(`${apiUrl}/api/team`);
        setTeams(response.data.teams);
        console.log(response.data.teams);
        if (response.data.teams.length > 0) {
          console.log(response.data.teams[0].image[0]); // Access the first image of the first team if it exists
        }
      } catch (error) {
        console.error("Error fetching team details:", error);
      }
    };

    fetchAboutData();
    fetchTeams();

    const handleResize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 600px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  if (!aboutData || !teams) {
    return <div></div>;
  }

  // Function to replace backslashes with forward slashes
  const formatFilePath = (path) => {
    return path.replace(/\\/g, "/");
  };

  // Log the API URL to ensure it's correct
  console.log("API URL:", process.env.REACT_APP_API_URL);

  const styles = {
    title: {
      fontSize: "40px",
    },
    imgTag: {
      filter: "brightness(0.5)",
      height: "auto",
    },
    headerSection: {
      position: isSmallScreen ? "static" : "absolute",
    },
  };

  return (
    <Layout style={styles.headerSection}>
      <Helmet>
        {/* Meta tags specific to the About page */}
        <title>{aboutData[0].metaTitle}</title>
        <meta name="title" content={aboutData[0].metaTitle} />
        <meta name="description" content={aboutData[0].metaDescription} />
        {/* Add other meta tags as needed */}
      </Helmet>
      {/* Embark on Epic Adventures section start */}
      <div className="service_section position-relative">
        <div className="app">
          <div className="video-list image-list">
            {aboutData[0].media && aboutData[0].media.iframe ? (
              <VideoPlayer
                src={aboutData[0].media.iframe}
                style={styles.imgTag}
              />
            ) : (
              <img
                src={`${process.env.REACT_APP_API_URL}/${formatFilePath(
                  aboutData[0].media.filepath
                )}`}
                style={styles.imgTag}
                alt="Media"
                loading="lazy"
              />
            )}
          </div>
        </div>
        <div className="about_title">{/* <h1>{aboutData[0].title}</h1> */}</div>
        <div className="arrow_down">
          <a href="#about">
            <div className="sr-arrow sr-bounce"></div>
          </a>
        </div>
      </div>

      {/* Embark on Epic Adventures section start */}
      <div className="epic_adventures_section pt-5 mt-5" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h1 className="pb-5" style={styles.title}>
                {aboutData[0].title}
              </h1>
              <p>{Parse(aboutData[0].description)}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Embark on Epic Adventures section close */}

      {/* Team section start */}
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section_title">
                <h2 className="pb-3">
                  Our Key <strong>People</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_team">
        <div className="team_container">
          {teams.map((item) => {
            // Log the formatted file path for each team member
            const formattedFilePath = formatFilePath(item.image[0].filepath);
            console.log(
              `Formatted File Path for ${item.name}: ${formattedFilePath}`
            );

            // Verify the URL
            const backgroundImageUrl = `${process.env.REACT_APP_API_URL}/${formattedFilePath}`;
            console.log(
              `Background Image URL for ${item.name}: ${backgroundImageUrl}`
            );

            return (
              <div
                className="section"
                key={item._id}
                style={{
                  backgroundImage: `url(${backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="content">
                  <div className="team_name_social">
                    <div className="name">
                      <h5>{item.designation}</h5>
                      <h3>{item.name}</h3>
                    </div>
                    {/* Social Media Icons */}
                    <div className="social_media_abt">
                      <a
                        href={item.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          style={{ color: "white" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="overlay"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team section close */}
    </Layout>
  );
}
