const mongoose = require("mongoose");
// const config = require('../config');
const dotenv = require("dotenv");
const config = dotenv.config().parsed;

async function connectMongoDB() {
  mongoose.connection.on("connecting", () => {
    console.log("Mongoose가 MongoDB 서버에 연결중입니다!");
  });
  mongoose.connection.on("connected", () => {
    console.log("Mongoose가 MongoDB에 정상적으로 연결되었습니다.");
  });
  mongoose.connection.on("disconnecting", () => {
    console.log("Mongoose가 MongoDB와의 연결을 끊고 있습니다!");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose가 MongoDB와의 연결을 정상적으로 끊었습니다.");
  });
  mongoose.connection.on("error", () => {
    console.log(`Mongoose에서 에러가 발생하였습니다.`);
  });

  await mongoose
    .connect(config.MONGODB_URL, {
      minPoolsize: 4,
      maxPoolsize: 20,
    })
    .then(() => console.log("connected to MongoDB 🦡"));
}

async function disconnectMongoDB() {
  await mongoose.disconnect();
}

module.exports = {
  connectMongoDB,
  disconnectMongoDB,
};
