module.exports = ({ env }) => ({
  auth: {
    secret: "muse",
  },
  apiToken: {
    salt: 10,
  },
});
