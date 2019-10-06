const api = require('./api');

module.exports.run = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  return {
    status: 200,
    message: 'Hello world'
  }
};
