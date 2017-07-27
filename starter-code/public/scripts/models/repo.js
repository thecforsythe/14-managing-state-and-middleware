'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // : What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function makes and ajas get requests using the app.get route for /github/ puts the returned data into repos.all, and fires off a callback function.  It is called in aboutController.js and passed the app.repoView.index as it's callback function.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
      .then(data => repos.all = data, err => console.error(err))
      .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
