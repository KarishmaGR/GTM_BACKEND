const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    vacancies: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    joblocation: {
      type: String,
      required: true,
    },
    joining: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    responsibilities: [
      {
        type: String,
        required: true,
      },
    ],
    requirements: [
      {
        type: String,
        required: true,
      },
    ],
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
