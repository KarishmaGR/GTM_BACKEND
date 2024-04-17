const cloudinary = require("cloudinary").v2;

const cloudinaryConnect = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  } catch (error) {
    console.log("Error while connecting to Cloudinary:", error);
  }
};

module.exports = cloudinaryConnect;
