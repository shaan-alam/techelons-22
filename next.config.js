const withImages = require("next-images");
const compose = require("next-compose-plugins");

module.exports = compose([
  [withImages()],
  {
    reactStrictMode: true,
    env: {
      GOOGLE_ANALYTICS_ID: "G-HBNES2GKM6",
    },
  },
]);
