const { JWT_SECRET } = process.env;

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', JWT_SECRET)
    }
  }
});
