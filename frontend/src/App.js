// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   useLocation,
// //   useNavigate,
// // } from "react-router-dom";

// // import AdminHome from "./pages/admin/home";
// // import Application from "./pages/admin/application";
// // import Team from "./pages/admin/team/team";
// // import AdminContact from "./pages/admin/contact";
// // import Login from "./pages/admin/login";
// // // import Register from "./pages/register";
// // import AddTeam from "./pages/admin/team/addteam";
// // import EditTeam from "./pages/admin/team/editteam";
// // import Gallery from "./pages/admin/gallery/gallery";
// // import GalleryName from "./pages/admin/gallery_name/gallery-name";
// // import AdminServices from "./pages/admin/services/services";
// // // import AdminCareer from "./pages/admin/career/career";
// // // import AddCareer from "./pages/admin/career/addcareer";
// // import EditCareer from "./pages/admin/career/editcareer";
// // import AddGallery from "./pages/admin/gallery/addgallery";
// // import EditGallery from "./pages/admin/gallery/editgallery";
// // import AddOpportunity from "./pages/admin/opportunity/addopportunity";
// // import EditOpportunity from "./pages/admin/opportunity/editopportunity";
// // import Opportunities from "./pages/admin/opportunity/opportunity";
// // import AddService from "./pages/admin/services/addservice";
// // import EditService from "./pages/admin/services/editservice";
// // import EditAbout from "./pages/admin/about/editabout";
// // import AddGalleryName from "./pages/admin/gallery_name/addgallery_name";
// // import EditGalleryName from "./pages/admin/gallery_name/editgallery_name";
// // import Project from "./pages/admin/project/project";
// // import AddProject from "./pages/admin/project/addproject";
// // import EditProject from "./pages/admin/project/editproject";
// // import ProjectDetail from "./pages/admin/projectDetail/projectDetail";
// // import AddProjectDetail from "./pages/admin/projectDetail/addprojectDetail";
// // import EditProjectDetail from "./pages/admin/projectDetail/editprojectDetail";
// // import Password from "./pages/admin/password/password";
// // import EditPassword from "./pages/admin/password/editpassword";
// // import AddPassword from "./pages/admin/password/addpassword";

// // import AdminRoute from "./routes/AdminRoutes";

// // import Home from "./pages/user/Home";
// // import About from "./pages/user/About";
// // import Service from "./pages/user/Service";
// // import Pagenotfound from "./pages/user/Pagenotfound";
// // import Contact from "./pages/user/Contact";
// // import Career from "./pages/user/Career";
// // import Servicedetail from "./pages/user/Servicedetail";
// // import CookieConsent from "./components/cookieConsent";
// // import { useEffect, useState } from "react";

// // function App() {
// //   const location = useLocation();
// //   const [showCookiePopup, setShowCookiePopup] = useState(false);

// //   useEffect(() => {
// //     // Check if the current path is a user-facing route
// //     const isUserFacingRoute =
// //       location.pathname === "/" ||
// //       location.pathname === "/about" ||
// //       location.pathname.startsWith("/service-detail/") ||
// //       location.pathname === "/contact" ||
// //       location.pathname === "/career";

// //     // Show cookie popup only if it's a user-facing route and cookie consent is not given
// //     const cookieConsent = localStorage.getItem("cookieConsent");
// //     setShowCookiePopup(isUserFacingRoute && !cookieConsent);
// //   }, [location]);

// //   const handleAcceptCookies = () => {
// //     // Set showCookiePopup to false when cookies are accepted
// //     setShowCookiePopup(false);

// //     // Example: Store preferences in cookies
// //     document.cookie = "language=en; path=/";
// //     document.cookie = "theme=dark; path=/";

// //     // Store cookie consent
// //     localStorage.setItem("cookieConsent", "true");
// //   };

// //   return (
// //     <>
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/service/:service_name" element={<Service />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/career" element={<Career />} />
// //           <Route
// //             path="/service-detail/:project_name"
// //             element={<Servicedetail />}
// //           />

// //           <Route path="/login" element={<Login />} />
// //           <Route path="/admin" element={<AdminRoute />}>
// //             <Route path="dashboard" element={<AdminHome />} />
// //             <Route path="team" element={<Team />} />
// //             <Route path="applications" element={<Application />} />
// //             <Route path="contact" element={<AdminContact />} />
// //             <Route path="add/team" element={<AddTeam />} />
// //             <Route path="edit/team/:id" element={<EditTeam />} />
// //             <Route path="gallery" element={<Gallery />} />
// //             <Route path="gallery_name" element={<GalleryName />} />
// //             <Route path="opportunities" element={<Opportunities />} />
// //             <Route path="edit/about" element={<EditAbout />} />
// //             {/* <Route path="career" element={<AdminCareer />} /> */}
// //             {/* <Route path="add/career" element={<AddCareer />} /> */}
// //             <Route path="edit/career" element={<EditCareer />} />
// //             <Route path="add/gallery" element={<AddGallery />} />
// //             <Route path="edit/gallery/:id" element={<EditGallery />} />
// //             <Route path="add/opportunity" element={<AddOpportunity />} />
// //             <Route path="edit/opportunity/:id" element={<EditOpportunity />} />
// //             <Route path="add/service" element={<AddService />} />
// //             <Route path="edit/service/:id" element={<EditService />} />
// //             <Route path="services" element={<AdminServices />} />
// //             <Route path="add/gallery_name" element={<AddGalleryName />} />
// //             <Route path="edit/gallery_name/:id" element={<EditGalleryName />} />
// //             <Route path="project" element={<Project />} />
// //             <Route path="add/project" element={<AddProject />} />
// //             <Route path="edit/project/:id" element={<EditProject />} />
// //             <Route path="project_detail" element={<ProjectDetail />} />
// //             <Route path="add/project_detail" element={<AddProjectDetail />} />
// //             <Route
// //               path="edit/project_detail/:id"
// //               element={<EditProjectDetail />}
// //             />
// //             <Route path="password" element={<Password />} />

// //             <Route path="edit/password/:id" element={<EditPassword />} />
// //             <Route path="add/password/:id" element={<AddPassword />} />
// //           </Route>

// //           <Route path="*" element={<Pagenotfound />} />
// //         </Routes>
// //         <div className="App">
// //           {showCookiePopup && <CookieConsent onAccept={handleAcceptCookies} />}
// //         </div>
// //       </Router>
// //     </>
// //   );
// // }

// // export default App;

// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";

// import AdminHome from "./pages/admin/home";
// import Application from "./pages/admin/application";
// import Team from "./pages/admin/team/team";
// import AdminContact from "./pages/admin/contact";
// import Login from "./pages/admin/login";
// import AddTeam from "./pages/admin/team/addteam";
// import EditTeam from "./pages/admin/team/editteam";
// import Gallery from "./pages/admin/gallery/gallery";
// import GalleryName from "./pages/admin/gallery_name/gallery-name";
// import AdminServices from "./pages/admin/services/services";
// import EditCareer from "./pages/admin/career/editcareer";
// import AddGallery from "./pages/admin/gallery/addgallery";
// import EditGallery from "./pages/admin/gallery/editgallery";
// import AddOpportunity from "./pages/admin/opportunity/addopportunity";
// import EditOpportunity from "./pages/admin/opportunity/editopportunity";
// import Opportunities from "./pages/admin/opportunity/opportunity";
// import AddService from "./pages/admin/services/addservice";
// import EditService from "./pages/admin/services/editservice";
// import EditAbout from "./pages/admin/about/editabout";
// import AddGalleryName from "./pages/admin/gallery_name/addgallery_name";
// import EditGalleryName from "./pages/admin/gallery_name/editgallery_name";
// import Project from "./pages/admin/project/project";
// import AddProject from "./pages/admin/project/addproject";
// import EditProject from "./pages/admin/project/editproject";
// import ProjectDetail from "./pages/admin/projectDetail/projectDetail";
// import AddProjectDetail from "./pages/admin/projectDetail/addprojectDetail";
// import EditProjectDetail from "./pages/admin/projectDetail/editprojectDetail";
// import Password from "./pages/admin/password/password";
// import EditPassword from "./pages/admin/password/editpassword";
// import AddPassword from "./pages/admin/password/addpassword";

// import AdminRoute from "./routes/AdminRoutes";

// import Home from "./pages/user/Home";
// import About from "./pages/user/About";
// import Service from "./pages/user/Service";
// import Pagenotfound from "./pages/user/Pagenotfound";
// import Contact from "./pages/user/Contact";
// import Career from "./pages/user/Career";
// import Servicedetail from "./pages/user/Servicedetail";
// import CookieConsent from "./components/cookieConsent";

// function App() {
//   const location = useLocation();
//   const [showCookiePopup, setShowCookiePopup] = useState(false);

//   useEffect(() => {
//     // Check if the current path is a user-facing route
//     const isUserFacingRoute =
//       location.pathname === "/" ||
//       location.pathname === "/about" ||
//       location.pathname.startsWith("/service-detail/") ||
//       location.pathname === "/contact" ||
//       location.pathname === "/career";

//     // Show cookie popup only if it's a user-facing route and cookie consent is not given
//     const cookieConsent = localStorage.getItem("cookieConsent");
//     setShowCookiePopup(isUserFacingRoute && !cookieConsent);
//   }, [location]);

//   const handleAcceptCookies = () => {
//     // Set showCookiePopup to false when cookies are accepted
//     setShowCookiePopup(false);

//     // Example: Store preferences in cookies
//     document.cookie = "language=en; path=/";
//     document.cookie = "theme=dark; path=/";

//     // Store cookie consent
//     localStorage.setItem("cookieConsent", "true");
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service/:service_name" element={<Service />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/career" element={<Career />} />
//         <Route
//           path="/service-detail/:project_name"
//           element={<Servicedetail />}
//         />

//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminRoute />}>
//           <Route path="dashboard" element={<AdminHome />} />
//           <Route path="team" element={<Team />} />
//           <Route path="applications" element={<Application />} />
//           <Route path="contact" element={<AdminContact />} />
//           <Route path="add/team" element={<AddTeam />} />
//           <Route path="edit/team/:id" element={<EditTeam />} />
//           <Route path="gallery" element={<Gallery />} />
//           <Route path="gallery_name" element={<GalleryName />} />
//           <Route path="opportunities" element={<Opportunities />} />
//           <Route path="edit/about" element={<EditAbout />} />
//           <Route path="edit/career" element={<EditCareer />} />
//           <Route path="add/gallery" element={<AddGallery />} />
//           <Route path="edit/gallery/:id" element={<EditGallery />} />
//           <Route path="add/opportunity" element={<AddOpportunity />} />
//           <Route path="edit/opportunity/:id" element={<EditOpportunity />} />
//           <Route path="add/service" element={<AddService />} />
//           <Route path="edit/service/:id" element={<EditService />} />
//           <Route path="services" element={<AdminServices />} />
//           <Route path="add/gallery_name" element={<AddGalleryName />} />
//           <Route path="edit/gallery_name/:id" element={<EditGalleryName />} />
//           <Route path="project" element={<Project />} />
//           <Route path="add/project" element={<AddProject />} />
//           <Route path="edit/project/:id" element={<EditProject />} />
//           <Route path="project_detail" element={<ProjectDetail />} />
//           <Route path="add/project_detail" element={<AddProjectDetail />} />
//           <Route
//             path="edit/project_detail/:id"
//             element={<EditProjectDetail />}
//           />
//           <Route path="password" element={<Password />} />
//           <Route path="edit/password/:id" element={<EditPassword />} />
//           <Route path="add/password/:id" element={<AddPassword />} />
//         </Route>

//         <Route path="*" element={<Pagenotfound />} />
//       </Routes>

//       {/* Show cookie consent popup only on user-facing routes */}
//       {showCookiePopup && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             padding: 10,
//             background: "#ccc",
//           }}
//         >
//           This is a cookie consent popup.
//           <button onClick={handleAcceptCookies}>Accept</button>
//         </div>
//       )}
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";

import AdminHome from "./pages/admin/home";
import Application from "./pages/admin/application";
import Team from "./pages/admin/team/team";
import AdminContact from "./pages/admin/contact";
import Login from "./pages/admin/login";
import AddTeam from "./pages/admin/team/addteam";
import EditTeam from "./pages/admin/team/editteam";
import Gallery from "./pages/admin/gallery/gallery";
import GalleryName from "./pages/admin/gallery_name/gallery-name";
import AdminServices from "./pages/admin/services/services";
import EditCareer from "./pages/admin/career/editcareer";
import AddGallery from "./pages/admin/gallery/addgallery";
import EditGallery from "./pages/admin/gallery/editgallery";
import AddOpportunity from "./pages/admin/opportunity/addopportunity";
import EditOpportunity from "./pages/admin/opportunity/editopportunity";
import Opportunities from "./pages/admin/opportunity/opportunity";
import AddService from "./pages/admin/services/addservice";
import EditService from "./pages/admin/services/editservice";
import EditAbout from "./pages/admin/about/editabout";
import AddGalleryName from "./pages/admin/gallery_name/addgallery_name";
import EditGalleryName from "./pages/admin/gallery_name/editgallery_name";
import Project from "./pages/admin/project/project";
import AddProject from "./pages/admin/project/addproject";
import EditProject from "./pages/admin/project/editproject";
import ProjectDetail from "./pages/admin/projectDetail/projectDetail";
import AddProjectDetail from "./pages/admin/projectDetail/addprojectDetail";
import EditProjectDetail from "./pages/admin/projectDetail/editprojectDetail";
import Password from "./pages/admin/password/password";
import EditPassword from "./pages/admin/password/editpassword";
import AddPassword from "./pages/admin/password/addpassword";

import AdminRoute from "./routes/AdminRoutes";

import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Service from "./pages/user/Service";
import Services from "./pages/user/Services";
import Pagenotfound from "./pages/user/Pagenotfound";
import Contact from "./pages/user/Contact";
import Career from "./pages/user/Career";
import Servicedetail from "./pages/user/Servicedetail";
import CookieConsent from "./components/cookieConsent";

function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  const upsertMetaTag = (name, content) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute("name", name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", content);
  };

  const formatSlugToTitle = (slug = "") =>
    slug
      .split("-")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const isUserFacingRoute =
      currentPath === "/" ||
      currentPath === "/about" ||
      currentPath.startsWith("/service-detail/") ||
      currentPath === "/career" ||
      currentPath === "/service" ||
      currentPath === "/contact";

    const cookieConsent = localStorage.getItem("cookieConsent");
    setShowCookiePopup(isUserFacingRoute && !cookieConsent);
  }, []);

  const handleAcceptCookies = () => {
    setShowCookiePopup(false);
    document.cookie = "language=en; path=/";
    document.cookie = "theme=dark; path=/";
    localStorage.setItem("cookieConsent", "true");
  };

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    const { pathname } = window.location;
    let metaTitle = "Ares Studio | Games, VFX & 3D Production Excellence";
    let metaDescription =
      "Ares Studio delivers world-class game art, VFX, and 3D production services with scalable pipelines and expert talent for global creative projects.";

    if (pathname === "/portfolio") {
      metaTitle = "Portfolio | Ares Studio Projects in Games & VFX";
      metaDescription =
        "Explore Ares Studio portfolio work across games, VFX, and 3D production, featuring high-quality visuals, environments, and cinematic content.";
    } else if (pathname.startsWith("/projects/")) {
      const segments = pathname.split("/").filter(Boolean);
      const projectSlug = segments[1] || "";
      const albumSlug = segments[3] || "";

      if (albumSlug) {
        const projectName = formatSlugToTitle(projectSlug);
        const albumName = formatSlugToTitle(albumSlug);
        metaTitle = `${albumName} | ${projectName} | Ares Studio`;
        metaDescription = `View album ${albumName} from ${projectName}, featuring selected Ares Studio production work, visual quality benchmarks, and final creative outputs.`;
      } else {
        const projectName = formatSlugToTitle(projectSlug);
        metaTitle = `${projectName} | Project Case Study | Ares Studio`;
        metaDescription = `Discover ${projectName}, an Ares Studio project showcasing game art, VFX, and production craftsmanship from concept through final delivery.`;
      }
    } else if (pathname === "/blogs") {
      metaTitle = "Blog | Ares Studio Insights on Games, VFX & Production";
      metaDescription =
        "Read Ares Studio insights, updates, and behind-the-scenes stories on game art, VFX pipelines, creative production, and industry trends.";
    } else if (pathname.startsWith("/blogs/")) {
      const blogSlug = pathname.split("/").filter(Boolean)[1] || "";
      const blogTitle = formatSlugToTitle(blogSlug);
      metaTitle = `${blogTitle} | Ares Studio Blog`;
      metaDescription = `Read ${blogTitle} on the Ares Studio blog, covering production updates, creative direction, and practical insights for games and VFX teams.`;
    }

    document.title = metaTitle;
    upsertMetaTag("title", metaTitle);
    upsertMetaTag("description", metaDescription);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:service_name" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/service" element={<Services />} />
          <Route
            path="/service-detail/:project_name"
            element={<Servicedetail />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminRoute />}>
            <Route path="dashboard" element={<AdminHome />} />
            <Route path="team" element={<Team />} />
            <Route path="applications" element={<Application />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="add/team" element={<AddTeam />} />
            <Route path="edit/team/:id" element={<EditTeam />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="gallery_name" element={<GalleryName />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="edit/about" element={<EditAbout />} />
            <Route path="edit/career" element={<EditCareer />} />
            <Route path="add/gallery" element={<AddGallery />} />
            <Route path="edit/gallery/:id" element={<EditGallery />} />
            <Route path="add/opportunity" element={<AddOpportunity />} />
            <Route path="edit/opportunity/:id" element={<EditOpportunity />} />
            <Route path="add/service" element={<AddService />} />
            <Route path="edit/service/:id" element={<EditService />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="add/gallery_name" element={<AddGalleryName />} />
            <Route path="edit/gallery_name/:id" element={<EditGalleryName />} />
            <Route path="project" element={<Project />} />
            <Route path="add/project" element={<AddProject />} />
            <Route path="edit/project/:id" element={<EditProject />} />
            <Route path="project_detail" element={<ProjectDetail />} />
            <Route path="add/project_detail" element={<AddProjectDetail />} />
            <Route
              path="edit/project_detail/:id"
              element={<EditProjectDetail />}
            />
            <Route path="password" element={<Password />} />
            <Route path="edit/password/:id" element={<EditPassword />} />
            <Route path="add/password/:id" element={<AddPassword />} />
          </Route>

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
      <div className="App">
        {showCookiePopup && <CookieConsent onAccept={handleAcceptCookies} />}
      </div>
    </>
  );
}

export default App;
