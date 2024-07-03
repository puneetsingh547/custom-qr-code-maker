const mongoose = require("mongoose");
const config = require('../config/config')

const connectDB = async () => {
  try {
    const url = config.mongo.uri;
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB
