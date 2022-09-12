const { AWS_BUCKET, IMPORT_LIMIT } = process.env;

module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            's3.amazonaws.com',
            `${env('AWS_BUCKET', AWS_BUCKET)}.s3.amazonaws.com`,
            `https://${env('AWS_BUCKET', AWS_BUCKET)}.s3.amazonaws.com`
          ],
          upgradeInsecureRequests: null,
        },
      },
    }
  },  
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: IMPORT_LIMIT,
    }
  },
  'strapi::favicon',
  'strapi::public',
  'strapi::session',
];
