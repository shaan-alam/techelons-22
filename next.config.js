const withImages = require("next-images");
const compose = require('next-compose')

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

const withImagesConfig = withImages();

module.exports = compose([
  [withImages, withImagesConfig],
  {
    env: {
      GOOGLE_ANALYTICS_ID: 'G-HBNES2GKM6'
    }
  }
])
