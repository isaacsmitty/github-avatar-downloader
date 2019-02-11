var request = require('request');
var token = require('./secrets.js')
//var api = process.argv.slice(2);

console.log('Welcome to the Github Avavtar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
  url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-agent': 'request', 'Authorization': `token ${token.GITHUB_TOKEN}`
  }
};
  request(options, function(err,result, body) {
    cb(err,body);
  })

};


getRepoContributors('isaacsmitty', 'closure', function(err, result) {
  console.log('Errors::', err);
  console.log('Result:', result);

});