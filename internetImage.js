// var request = require('request');

// request('https://sytantris.github.io/http-examples/future.jpg', function(err, response, body) {
//   if (err) throw err;
//   console.log('Response Status Code:', response.statusCode);
// });
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg') 
       .on('error', function (err) {                              
         throw err; 
       })
       .on('response', function (response) {  
         console.log('Response Status Code: ', response.statusMessage);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
