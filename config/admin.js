module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9b3786c0e809e9030f920e180f5a7e4'),
  },
});
