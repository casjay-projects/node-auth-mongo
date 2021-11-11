const MONGO_DB = process.env.MONGO_DB || 'mongodb://127.0.0.1:27017';
const NODE_ENV = process.env.NODE_ENV || 'development';
const PRODUCT_NAME = process.env.PRODUCT_NAME || 'auth server';
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'ndahgfjfhdkajh';
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE || '30758400';
const VERIFY_EXPIRATION = process.env.VERIFY_EXPIRATION || '';
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || 'REFRESH_TOKEN_SECRET';
const REFRESH_TOKEN_LIFE = process.env.REFRESH_TOKEN_LIFE || '';
const EMAIL_REPLY = process.env.EMAIL_REPLY || 'no-reply';
const EMAIL_HOST_DEV = process.env.EMAIL_HOST_DEV || 'localhost';
const EMAIL_PORT_DEV = process.env.EMAIL_PORT_DEV || '25';
const EMAIL_USER_DEV = process.env.EMAIL_USER_DEV || '';
const EMAIL_PASS_DEV = process.env.EMAIL_PASS_DEV || '';

if (NODE_ENV === 'development') {
  require('dotenv').config();
}

module.exports = {
  base_url:
    NODE_ENV === 'development'
      ? process.env.BASE_URL_DEVELOPMENT
      : process.env.BASE_URL_PRODUCTION,
  frontend_url:
    NODE_ENV === 'development'
      ? process.env.FRONTEND_URL_DEVELOPMENT
      : process.env.FRONTEND_URL_PRODUCTION,
  product_name: PRODUCT_NAME,
  access_token_secret: ACCESS_TOKEN_SECRET,
  access_token_life: Number(ACCESS_TOKEN_LIFE),
  refresh_token_secret: REFRESH_TOKEN_SECRET,
  refresh_token_life: Number(REFRESH_TOKEN_LIFE),
  database: MONGO_DB,
  verify_expiration: Number(VERIFY_EXPIRATION),
  email_settings: {
    reply: EMAIL_REPLY,
    host: EMAIL_HOST_DEV,
    port: EMAIL_PORT_DEV,
    user: EMAIL_USER_DEV,
    pass: EMAIL_PASS_DEV,
  },
};
