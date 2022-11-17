module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-130.railway.app"),
      port: env.int("PGPORT", 6707),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "dfddjYopZnCevWdIZQuK"),
      ssl: env.bool(true),
    },
  },
});
