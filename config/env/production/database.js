
const { DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env;

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      database: DATABASE_NAME,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD
    },
    debug: false,
  },
});