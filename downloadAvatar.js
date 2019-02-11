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
  request(options, function(err, result, body) {
    var json = JSON.parse(body)
    var contributor = json[0];
    var avatar = contributor['avatar_url'];
    json.forEach(function(contributor) {
      avatar = contributor['avatar_url']
    cb(err, avatar)
    })

  });
}

getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log(err);
  console.log(result);

});