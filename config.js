require('dotenv').config();
module.exports = {
    consumer_key: process.env.CONSUMERKEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCES_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  }