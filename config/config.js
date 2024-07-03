module.exports = {
  port: process.env.PORT || 4000,
  ip: process.env.HOST || "0.0.0.0",
  mongo: {
    uri: process.env.MONGO_URL || "mongodb://0.0.0.0:27017/qr-code-app",
  },
  redis: {
    uri: process.env.REDIS_URL || "redis://localhost:6379",
  },
  jwtSecret: process.env.JWT_SECRET || "jkl!±@£!@ghj1237",
};
