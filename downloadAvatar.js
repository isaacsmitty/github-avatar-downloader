
var request = require('request');
var fs = require('fs');
// path to github token
var token = require('./secrets.js')
//
var owner = process.argv[2];
var name = process.argv[3];

console.log('Welcome to the Github Avavtar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // case if user misses an argument
  if (owner === undefined || name === undefined) {

    console.log('Please enter valid repo owner and name.');

  } else {

    var options = {
      url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
      headers: {
        'User-agent': 'request', 'Authorization': `token ${token.GITHUB_TOKEN}`
      }
    };
//request data from url and parse data to get the path to the avatars
    request(options, function(err, result, body) {
      var json = JSON.parse(body)
      var contributor = json[0];
      var avatar = contributor['avatar_url'];
      json.forEach(function(contributor) {
        avatar = contributor['avatar_url']
        downloadImageByURL(avatar, `./avatars/${contributor.login}.jpg`);
      cb(err, avatar)
      })

    });
  }
}
//download from avatar paths
function downloadImageByURL(url, filePath) {
  request.get(url)

  .on('error', function(err) {
    console.log('error: ', err);
  })

  .on('response', function(response) {
    console.log('Code: ', response.statusCode, 'Message: ', response.statusMessage, 'Type: ', response.headers['content-type']);
  })

  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors(owner, name, function(err, result) {

  console.log(result);
});


