var request = require('request');

var contributor = process.argv.slice(2);

request.('https://api.github.com/repos/jquery/jquery/contributors' function(error, response, body) {
  if (!error && response.statusCode === 200){
    console.log(contributor);
  }
});