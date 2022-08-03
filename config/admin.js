const { ADMIN_JWT_SECRET,  API_TOKEN_SALT} = process.env;

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', ADMIN_JWT_SECRET),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', API_TOKEN_SALT),
  },
});