var AWS = require('aws-sdk');

var s3 = new AWS.S3();

var params = {Bucket: 'rankll', Key: 'teste', Body: '/tmp/grades.json'};

  s3.putObject(params, function(err, data) {

      if (err)

          console.log(err);

      else console.log("Successfully uploaded data to myBucket/myKey");

   });

