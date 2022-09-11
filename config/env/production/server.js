
const { PORT, APP_KEYS } = process.env;

module.exports = ({ env }) => ({
  port: env("PORT", PORT),
  app: {
    keys: env.array('APP_KEYS', APP_KEYS),
  },
});