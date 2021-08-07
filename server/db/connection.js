const monk = require('monk');
const config = require('../config.json');

const connectionString = config.mongodb_url+config.db_name;
const db = monk(connectionString);

module.exports = db;