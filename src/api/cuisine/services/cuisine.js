'use strict';

/**
 * cuisine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cuisine.cuisine');
