const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  stats: {
    modules: false
  },
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production'
};
