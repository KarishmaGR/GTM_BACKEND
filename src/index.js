const express = require("express");
const app = express();
const JobRouter = require("./Routes/Job.routes");
const DirectorRouter = require("./Routes/Director.routes");
const DBconnect = require("./DB");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cloudinaryConnect = require("./utils/Cloudinary");

dotenv.config({
  path: "./.env",
});

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/job", JobRouter);
app.use("/api/v1/director", DirectorRouter);

DBconnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Is Running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error in server running");
  });

cloudinaryConnect();
