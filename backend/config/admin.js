module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd5021df7ff31757c7b4dd76e148cc387'),
  },
});
