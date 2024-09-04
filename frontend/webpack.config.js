// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   mode: "production",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: [
//           {
//             loader: "babel-loader", // Ensure Babel is used to transpile your JS
//             options: {
//               presets: ["@babel/preset-react"],
//             },
//           },
//           {
//             loader: "prerender-loader",
//             options: {
//               entry: "./src/index.js",
//               routes: [
//                 "/career",
//                 "/about",
//                 "/home",
//                 "/contact",
//                 "/service",
//                 "/service/games",
//                 "/service/vfx",
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
    libraryTarget: "commonjs2", // To make it require-able
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
