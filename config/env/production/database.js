
const { DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env;

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    // connection: {
    //   host: DATABASE_HOST,
    //   port: DATABASE_PORT,
    //   database: DATABASE_NAME,
    //   user: DATABASE_USER,
    //   password: DATABASE_PASSWORD
    // },
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", ""),
      password: env("DATABASE_PASSWORD", ""),
    },
    useNullAsDefault: true,
    debug: false,
  },
});