var request = require('request');

//var api = process.argv.slice(2);

console.log('Welcome to the Github Avavtar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
  url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-agent': 'request'
  }
};
  request(options, function(err,result, body) {
    cb(err,body);
  })

};


getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors::', err);
  console.log('Result:', result);

});