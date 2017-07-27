'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // : What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function shows the element with id = "about" and hides all siblings of that element.  Then it calls the requestRepos function from repo.js and passes in the repoView.index function as the callback. (repoView.index appends data).
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
