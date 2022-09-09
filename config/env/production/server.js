
const { PORT, HOST, APP_KEYS } = process.env;

module.exports = ({ env }) => ({
  url: env('http://caAdmin.cleaver.rocks'),
  port: env("PORT", PORT),
  app: {
    keys: env.array('APP_KEYS', APP_KEYS),
  },
});
