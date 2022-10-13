'use strict';

/**
 * mixpanel-distinct-id service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mixpanel-distinct-id.mixpanel-distinct-id');
