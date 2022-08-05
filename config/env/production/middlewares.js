const { AWS_BUCKET } = process.env;

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
            'dl.airtable.com',
            `${env('AWS_BUCKET', AWS_BUCKET)}.s3.amazonaws.com`
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            `${env('AWS_BUCKET', AWS_BUCKET)}.s3.amazonaws.com`
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
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  'strapi::session',
];
