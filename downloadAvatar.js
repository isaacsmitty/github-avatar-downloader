var request = require('request');

//var api = process.argv.slice(2);

console.log('Welcome to the Github Avavtar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

};

getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors::', err);
  console.log('Result:', result);
});