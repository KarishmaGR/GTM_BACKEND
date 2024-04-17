const express = require("express");

const upload = require("../Middelware/Multer.middelware");
const {
  createDirector,
  getDirectors,
  getDirectorById,
  deleteDirector,
} = require("../Controller/Director.controller");
const router = express.Router();

router
  .route("/createDirector")
  .post(upload.fields([{ name: "profileImage", maxCount: 1 }]), createDirector);
router.route("/getalldirector").get(getDirectors);
router.route("/getdirectorbyid/:directorId").get(getDirectorById);
router.route("/deletedirector/:directorId").delete(deleteDirector);
module.exports = router;
