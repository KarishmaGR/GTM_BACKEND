const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const CLOUDINARY_FOLDER = "videohosting";

const uploadImageOnCloudinary = async (filelocalpath) => {
  try {
    if (!filelocalpath) return null;

    const response = await cloudinary.uploader.upload(filelocalpath, {
      resource_type: "auto",
      folder: CLOUDINARY_FOLDER,
    });

    fs.unlinkSync(filelocalpath);
    return response;
  } catch (error) {
    console.log("Error While Uploading image on Cloudinary", error);
    fs.unlinkSync(filelocalpath);
    return error;
  }
};

module.exports = uploadImageOnCloudinary;
