const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

export default {
  secret: process.env.DB_SECRETS,
  expiresIn: '7d',
}