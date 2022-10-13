const { APP_KEYS } = process.env;

module.exports = ({ env }) => ({
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", APP_KEYS),
  },
});
