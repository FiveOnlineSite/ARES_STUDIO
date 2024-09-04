// // const express = require("express");
// // const dotenv = require("dotenv");
// // const Route = require("./routes/index");
// // const connectDb = require("./config/database");
// // const cors = require("cors");
// // const path = require("path");

// // dotenv.config();

// // // app.use(
// // //   cors({
// // //     origin: "http://localhost:3000",
// // //   })
// // // );

// // const app = express();
// // app.use(express.json());

// // const PORT = process.env.PORT || 8000;

// // const allowedOrigins =
// //   process.env.NODE_ENV === "production"
// //     ? [process.env.PROD_URL] // Production URL
// //     : [process.env.DEV_URL]; // Development URL

// // app.use(
// //   cors({
// //     origin: function (origin, callback) {
// //       // Allow requests with no origin like mobile apps or curl requests
// //       if (!origin) return callback(null, true);
// //       if (allowedOrigins.indexOf(origin) === -1) {
// //         const msg =
// //           "The CORS policy for this site does not allow access from the specified origin.";
// //         return callback(new Error(msg), false);
// //       }
// //       return callback(null, true);
// //     },
// //   })
// // );

// // // Serve static files from the React app
// // app.use(express.static(path.join(__dirname, "../frontend/build")));

// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // app.get("/api", (req, res) => {
// //   res.send("This is backend");
// // });

// // // Apply CORS middleware to all API routes
// // app.use("/api", cors());

// // // Define API routes
// // app.use("/api/auth", Route.authRoute);
// // app.use("/api/team", Route.teamRoute);
// // app.use("/api/contact", Route.contactRoute);
// // app.use("/api/jobapplication", Route.jobApplicationRoute);
// // app.use("/api/about", Route.aboutRoute);
// // app.use("/api/career", Route.careerRoute);
// // app.use("/api/opportunity", Route.opportunitityRoute);
// // app.use("/api/service", Route.serviceRoute);
// // app.use("/api/gallery", Route.galleryRoute);
// // app.use("/api/gallery_name", Route.galleryNameRoute);
// // app.use("/api/project", Route.projectRoute);
// // app.use("/api/project_detail", Route.projectDetailsRoute);
// // app.use("/api/email", Route.emailRoute);

// // connectDb();

// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// // });

// // app.listen(PORT, "0.0.0.0", (error) => {
// //   if (error) {
// //     console.log(`Server connection failed due to ${error}`);
// //   }
// //   console.log(`Server is running on port ${process.env.PORT}`);
// // });

// const express = require("express");
// const dotenv = require("dotenv");
// const Route = require("./routes/index");
// const connectDb = require("./config/database");
// const cors = require("cors");
// const path = require("path");

// dotenv.config();

// const app = express();
// app.use(express.json());

// console.log("Environment Variables:");
// console.log("NODE_ENV:", process.env.NODE_ENV);
// console.log("PROD_URL:", process.env.PROD_URL);
// console.log("DEV_URL:", process.env.DEV_URL);

// const PORT = process.env.PORT || 8000;

// const allowedOrigins =
//   process.env.NODE_ENV === "production"
//     ? [process.env.PROD_URL] // Production URL
//     : [process.env.DEV_URL]; // Development URL

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin like mobile apps or curl requests
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.get("/api", (req, res) => {
//   res.send("This is backend");
// });

// // Define API routes
// app.use("/api/auth", Route.authRoute);
// app.use("/api/team", Route.teamRoute);
// app.use("/api/contact", Route.contactRoute);
// app.use("/api/jobapplication", Route.jobApplicationRoute);
// app.use("/api/about", Route.aboutRoute);
// app.use("/api/career", Route.careerRoute);
// app.use("/api/opportunity", Route.opportunitityRoute);
// app.use("/api/service", Route.serviceRoute);
// app.use("/api/gallery", Route.galleryRoute);
// app.use("/api/gallery_name", Route.galleryNameRoute);
// app.use("/api/project", Route.projectRoute);
// app.use("/api/project_detail", Route.projectDetailsRoute);
// app.use("/api/email", Route.emailRoute);

// app.get("/api/test-cors", (req, res) => {
//   res.json({ message: "CORS is working!" });
// });

// connectDb();

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

// app.listen(PORT, "0.0.0.0", (error) => {
//   if (error) {
//     console.log(`Server connection failed due to ${error}`);
//   }
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// require("@babel/register")({
//   presets: ["@babel/preset-env", "@babel/preset-react"],
//   plugins: ["@babel/plugin-transform-runtime"],
//   extensions: [".js", ".jsx"],
// });

// require("babel-polyfill"); // Include this if you're using async/await

// const express = require("express");
// const dotenv = require("dotenv");
// const Route = require("./routes/index");
// const connectDb = require("./config/database");
// const cors = require("cors");
// const path = require("path");
// const axios = require("axios");
// const cron = require("node-cron");
// const fs = require("fs");
// const React = require("react");
// const ReactDOMServer = require("react-dom/server");
// const { StaticRouter } = require("react-router-dom/server");
// const { Helmet } = require("react-helmet");
// const App = require("../frontend/src/pages/user/About").default; // Adjust the path according to your structure

// dotenv.config();

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 8000;

// app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.get("/api", (req, res) => {
//   res.send("This is backend");
// });

// app.use("/api/auth", Route.authRoute);
// app.use("/api/team", Route.teamRoute);
// app.use("/api/contact", Route.contactRoute);
// app.use("/api/jobapplication", Route.jobApplicationRoute);
// app.use("/api/about", Route.aboutRoute);
// app.use("/api/career", Route.careerRoute);
// app.use("/api/opportunity", Route.opportunitityRoute);
// app.use("/api/service", Route.serviceRoute);
// app.use("/api/gallery", Route.galleryRoute);
// app.use("/api/gallery_name", Route.galleryNameRoute);
// app.use("/api/project", Route.projectRoute);
// app.use("/api/project_detail", Route.projectDetailsRoute);
// app.use("/api/email", Route.emailRoute);

// app.get("/ping", (req, res) => {
//   res.send("Server is alive");
// });

// app.get("*", (req, res) => {
//   const context = {};

//   // Render React component to string
//   const appHtml = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <App />
//     </StaticRouter>
//   );

//   // Use Helmet to get meta tags
//   const helmet = Helmet.renderStatic();

//   // Read the index.html file
//   const indexFile = path.resolve(__dirname, "../frontend/build/index.html");

//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       console.error("Something went wrong:", err);
//       return res.status(500).send("Oops, better luck next time!");
//     }

//     // Replace placeholders with actual content
//     return res.send(
//       data
//         .replace(
//           "<title></title>",
//           helmet.title.toString() || "<title>Default Title</title>"
//         )
//         .replace(
//           '<meta name="description" content="">',
//           helmet.meta.toString() ||
//             '<meta name="description" content="Default Description">'
//         )
//         .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
//     );
//   });
// });

// const serverUrl = "https://ares-studio-calb.onrender.com/ping";

// cron.schedule("*/5 * * * *", async () => {
//   try {
//     await axios.get(serverUrl);
//     console.log("Ping sent to keep server alive.");
//   } catch (error) {
//     console.error("Error pinging server:", error.message);
//   }
// });

// connectDb();

// app.listen(PORT, "0.0.0.0", (error) => {
//   if (error) {
//     console.log(`Server connection failed due to ${error}`);
//   }
//   console.log(`Server is running on port ${PORT}`);
// });

// import "@babel/register";
// import "babel-polyfill"; // Include this if you're using async/await

// // Now you can use import/export and JSX
// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import fs from "fs";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import { Helmet } from "react-helmet";
// import connectDb from "./config/database.js";
// import * as Route from "./routes/index.js";
// import cors from "cors";
// import axios from "axios";
// import cron from "node-cron";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// // Import your React component
// import App from "../frontend/src/pages/user/About.js"; // Adjust the path according to your structure

// // Setup environment variables
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middlewares
// app.use(express.json());
// app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

// // Serve static files
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // API routes
// app.use("/api/auth", Route.authRoute);
// app.use("/api/team", Route.teamRoute);
// app.use("/api/contact", Route.contactRoute);
// app.use("/api/jobapplication", Route.jobApplicationRoute);
// app.use("/api/about", Route.aboutRoute);
// app.use("/api/career", Route.careerRoute);
// app.use("/api/opportunity", Route.opportunitityRoute);
// app.use("/api/service", Route.serviceRoute);
// app.use("/api/gallery", Route.galleryRoute);
// app.use("/api/gallery_name", Route.galleryNameRoute);
// app.use("/api/project", Route.projectRoute);
// app.use("/api/project_detail", Route.projectDetailsRoute);
// app.use("/api/email", Route.emailRoute);

// // Ping route for server status
// app.get("/ping", (req, res) => {
//   res.send("Server is alive");
// });

// // Serve the React app with SSR
// app.get("*", (req, res) => {
//   const context = {};

//   // Render React component to string
//   const appHtml = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <App />
//     </StaticRouter>
//   );

//   // Use Helmet to get meta tags
//   const helmet = Helmet.renderStatic();

//   // Read the index.html file
//   const indexFile = path.resolve(__dirname, "../frontend/build/index.html");

//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       console.error("Something went wrong:", err);
//       return res.status(500).send("Oops, better luck next time!");
//     }

//     // Replace placeholders with actual content
//     return res.send(
//       data
//         .replace(
//           "<title></title>",
//           helmet.title.toString() || "<title>Default Title</title>"
//         )
//         .replace(
//           '<meta name="description" content="">',
//           helmet.meta.toString() ||
//             '<meta name="description" content="Default Description">'
//         )
//         .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
//     );
//   });
// });

// // Ping to keep the server alive
// const serverUrl = "https://ares-studio-calb.onrender.com/ping";

// cron.schedule("*/5 * * * *", async () => {
//   try {
//     await axios.get(serverUrl);
//     console.log("Ping sent to keep server alive.");
//   } catch (error) {
//     console.error("Error pinging server:", error.message);
//   }
// });

// // Connect to the database
// connectDb();

// // Start the server
// app.listen(PORT, "0.0.0.0", (error) => {
//   if (error) {
//     console.log(`Server connection failed due to ${error}`);
//   }
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const dotenv = require("dotenv");
const Route = require("./routes/index");
const connectDb = require("./config/database");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const cron = require("node-cron");
const fs = require("fs");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api", (req, res) => {
  res.send("This is backend");
});

app.use("/api/auth", Route.authRoute);
app.use("/api/team", Route.teamRoute);
app.use("/api/contact", Route.contactRoute);
app.use("/api/jobapplication", Route.jobApplicationRoute);
app.use("/api/about", Route.aboutRoute);
app.use("/api/career", Route.careerRoute);
app.use("/api/opportunity", Route.opportunitityRoute);
app.use("/api/service", Route.serviceRoute);
app.use("/api/gallery", Route.galleryRoute);
app.use("/api/gallery_name", Route.galleryNameRoute);
app.use("/api/project", Route.projectRoute);
app.use("/api/project_detail", Route.projectDetailsRoute);
app.use("/api/email", Route.emailRoute);

app.get("/ping", (req, res) => {
  res.send("Server is alive");
});

const serverUrl = "https://ares-studio-calb.onrender.com/ping";

cron.schedule("*/5 * * * *", async () => {
  try {
    await axios.get(serverUrl);
    console.log("Ping sent to keep server alive.");
  } catch (error) {
    console.error("Error pinging server:", error.message);
  }
});

connectDb();

app.listen(PORT, "0.0.0.0", (error) => {
  if (error) {
    console.log(`Server connection failed due to ${error}`);
  }
  console.log(`Server is running on port ${PORT}`);
});

// import express from "express";
// import path from "path";
// import fs from "fs";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import { HelmetProvider } from "react-helmet-async";
// import App from "../frontend/src/App";
// import dotenv from "dotenv";
// import cors from "cors";
// import axios from "axios";
// import cron from "node-cron";

// // Import your routes
// import Route from "./routes/index";
// import connectDb from "./config/database";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // API Routes
// app.use("/api/auth", Route.authRoute);
// app.use("/api/team", Route.teamRoute);
// app.use("/api/contact", Route.contactRoute);
// app.use("/api/jobapplication", Route.jobApplicationRoute);
// app.use("/api/about", Route.aboutRoute);
// app.use("/api/career", Route.careerRoute);
// app.use("/api/opportunity", Route.opportunityRoute);
// app.use("/api/service", Route.serviceRoute);
// app.use("/api/gallery", Route.galleryRoute);
// app.use("/api/gallery_name", Route.galleryNameRoute);
// app.use("/api/project", Route.projectRoute);
// app.use("/api/project_detail", Route.projectDetailsRoute);
// app.use("/api/email", Route.emailRoute);

// // Serve static files
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // Server-side rendering with React
// app.get("*", (req, res) => {
//   const context = {};
//   const helmetContext = {};

//   const appHtml = ReactDOMServer.renderToString(
//     <HelmetProvider context={helmetContext}>
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     </HelmetProvider>
//   );

//   const helmet = helmetContext.helmet;

//   const indexFile = path.resolve(__dirname, "../frontend/build", "index.html");
//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       console.error("Something went wrong:", err);
//       return res.status(500).send("Oops, better luck next time!");
//     }

//     // Replace placeholders with actual meta tags and app HTML
//     return res.send(
//       data
//         .replace("<title></title>", `<title>${helmet.title.toString()}</title>`)
//         .replace(
//           '<meta name="description" content="">',
//           `<meta name="description" content="${helmet.meta.toString()}">`
//         )
//         .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
//     );
//   });
// });

// // Health check route
// app.get("/ping", (req, res) => {
//   res.send("Server is alive");
// });

// // Cron job to keep the server alive
// const serverUrl = "https://ares-studio-calb.onrender.com/ping";
// cron.schedule("*/5 * * * *", async () => {
//   try {
//     await axios.get(serverUrl);
//     console.log("Ping sent to keep server alive.");
//   } catch (error) {
//     console.error("Error pinging server:", error.message);
//   }
// });

// // Connect to database and start server
// connectDb();

// app.listen(PORT, "0.0.0.0", (error) => {
//   if (error) {
//     console.log(`Server connection failed due to ${error}`);
//   }
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js

// const express = require("express");
// const dotenv = require("dotenv");
// const Route = require("./routes/index");
// const connectDb = require("./config/database");
// const cors = require("cors");
// const path = require("path");
// const axios = require("axios");
// const cron = require("node-cron");
// const React = require("react");
// const { renderToString } = require("react-dom/server");
// const { StaticRouter } = require("react-router-dom/server");
// // const App = require("../frontend/src/App").default; // Adjust path as necessary
// const App = require("../frontend/build/app.bundle").default;
// const { HelmetProvider } = require("react-helmet-async");

// dotenv.config();

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 8000;

// app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // SSR middleware
// app.get("/*", (req, res) => {
//   const context = {};
//   const helmetContext = {};

//   const reactApp = renderToString(
//     <HelmetProvider context={helmetContext}>
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     </HelmetProvider>
//   );

//   const { helmet } = helmetContext;

//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       ${helmet.title.toString()}
//       ${helmet.meta.toString()}
//       ${helmet.link.toString()}
//       <link rel="stylesheet" href="/styles.css">
//     </head>
//     <body>
//       <div id="root">${reactApp}</div>
//       <script src="/bundle.js"></script>
//     </body>
//     </html>
//   `;

//   res.send(html);
// });

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // API routes
// app.use("/api", (req, res) => {
//   res.send("This is backend");
// });
// app.use("/api/auth", Route.authRoute);
// app.use("/api/team", Route.teamRoute);
// app.use("/api/contact", Route.contactRoute);
// app.use("/api/jobapplication", Route.jobApplicationRoute);
// app.use("/api/about", Route.aboutRoute);
// app.use("/api/career", Route.careerRoute);
// app.use("/api/opportunity", Route.opportunitityRoute);
// app.use("/api/service", Route.serviceRoute);
// app.use("/api/gallery", Route.galleryRoute);
// app.use("/api/gallery_name", Route.galleryNameRoute);
// app.use("/api/project", Route.projectRoute);
// app.use("/api/project_detail", Route.projectDetailsRoute);
// app.use("/api/email", Route.emailRoute);

// app.get("/ping", (req, res) => {
//   res.send("Server is alive");
// });

// const serverUrl = "https://ares-studio-calb.onrender.com/ping";

// cron.schedule("*/5 * * * *", async () => {
//   try {
//     await axios.get(serverUrl);
//     console.log("Ping sent to keep server alive.");
//   } catch (error) {
//     console.error("Error pinging server:", error.message);
//   }
// });

// connectDb();

// app.listen(PORT, "0.0.0.0", (error) => {
//   if (error) {
//     console.log(`Server connection failed due to ${error}`);
//   }
//   console.log(`Server is running on port ${PORT}`);
// });
