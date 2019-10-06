const https = require('https');
const S3Client = require('aws-sdk/clients/s3');

const sslAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 128,
  rejectUnauthorized: true
});

const s3 = new S3Client({
  apiVersion: '2006-03-01',
  httpOptions: {
    agent: sslAgent
  }
});

const put = opts => s3.putObject(opts).promise();
const get = opts => s3.getObject(opts).promise();
const del = opts => s3.deleteObject(opts).promise();

module.exports = { put, get, del };
