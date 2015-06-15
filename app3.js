var fs = require('fs');
var AWS = require('aws-sdk');

var s3 = new AWS.S3();

fs.readFile('/tmp/iis-8.png', function (err, data){
    
  s3.putObject({
    Bucket: 'rankll',
    Key: 'iis-10.png',
    Body: data
  }, function(err, data){
        if (err) console.log(err);
        console.log("Successfully uploaded data to myBucket/myKey");
  });
    
});

//
//var params = {Bucket: 'rankll', Key: 'teste', Body: '/tmp/grades.json'};
//
//  s3.putObject(params, function(err, data) {
//
//      if (err)
//
//          console.log(err);
//
//      else console.log("Successfully uploaded data to myBucket/myKey");
//
//   });
//
