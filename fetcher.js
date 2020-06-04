// Example...
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

const request = require('request');
const fs = require('fs');

let domain = process.argv[2];
let localPath = process.argv[3];

request(domain, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log(response['headers']['content-length']);
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(localPath, body, (error) => {
    if (error) {
      // Handle error
      console.log("Failed to write to file");
      return;
    }
    // Success!
    console.log(`Downloaded and saved ${response['headers']['content-length']} bytes to ${localPath}`);
  });
});