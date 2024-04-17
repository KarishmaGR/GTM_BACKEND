const express = require("express");
const {
  createJob,
  getJobs,
  getJobById,
  deleteJob,
} = require("../Controller/Job.controller");
const upload = require("../Middelware/Multer.middelware");
const router = express.Router();

router
  .route("/createjob")
  .post(upload.fields([{ name: "coverImage", maxCount: 1 }]), createJob);
router.route("/getalljobs").get(getJobs);
router.route("/getjobbyid/:jobId").get(getJobById);
router.route("/deletejob/:jobId").delete(deleteJob);
module.exports = router;
