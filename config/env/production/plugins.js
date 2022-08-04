const { JWT_SECRET, AWS_ACCESS_KEY_ID, AWS_ACCESS_SECRET, AWS_REGION, AWS_BUCKET } = process.env;

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', JWT_SECRET)
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID', AWS_ACCESS_KEY_ID),
        secretAccessKey: env('AWS_ACCESS_SECRET', AWS_ACCESS_SECRET),
        region: env('AWS_REGION', AWS_REGION),
        params: {
          Bucket: env('AWS_BUCKET', AWS_BUCKET),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});