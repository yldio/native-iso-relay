var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../src/data/schema.json');

module.exports = getbabelRelayPlugin(schema.data);
