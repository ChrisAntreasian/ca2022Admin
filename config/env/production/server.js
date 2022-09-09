
const { PORT, HOST, APP_KEYS, URL } = process.env;

module.exports = ({ env }) => ({
  host: env("HOST", HOST),
  url: env(URL),
  port: env("PORT", PORT),
  app: {
    keys: env.array('APP_KEYS', APP_KEYS),
  },
});
