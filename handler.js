'use strict';

let AWS = require('aws-sdk');
let ses = new AWS.SES({
  apiVersion: process.env.API_VERSION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION
});

module.exports.sendEmail = async (event) => {
  let body = JSON.parse(event.body);

  let params = {
    Destination: {
      CcAddresses: body.ccAddresses || [],
      BccAddresses: body.bccAddresses || [],
      ToAddresses: body.toAddresses
    },
    Message: {
      Body: {
        Html: {
          Data: body.body,
          Charset: 'utf-8'
        },
        Text: {
          Data: body.textBody,
          Charset: 'utf-8'
        }
      },
      Subject: {
        Data: body.subject,
        Charset: 'utf-8'
      }
    },
    Source: body.sender
  };

  return await ses.sendEmail(params).promise().then(function (data) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: data
      }),
    };
  }).catch(function (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        message: err,
      }),
    };
  });
};
