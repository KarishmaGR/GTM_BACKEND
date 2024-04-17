const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    const ConnectionIncetance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );

    console.log("Connected To mongodb", ConnectionIncetance.connection.host);
  } catch (error) {
    console.log("Error While Connecting with mongoDB");
  }
};

module.exports = DBconnect;
