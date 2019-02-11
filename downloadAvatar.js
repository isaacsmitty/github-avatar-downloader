var request = require('request');
var fs = require('fs');
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
      downloadImageByURL(avatar, `./avatars/${contributor.login}.jpg`);
    cb(err, avatar)
    })

  });
}

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

getRepoContributors('jquery', 'jquery', function(err, result) {

  console.log(result);

});
downloadImageByURL("https://avatars0.githubusercontent.com/u/1615?v=4", './avatars/image.jpg');


