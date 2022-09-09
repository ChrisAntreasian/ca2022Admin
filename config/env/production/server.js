
const { PORT, HOST, APP_KEYS } = process.env;

module.exports = ({ env }) => ({
  host: env("HOST", HOST),
  port: env("PORT", PORT),
  app: {
    keys: env.array('APP_KEYS', APP_KEYS),
  },
});