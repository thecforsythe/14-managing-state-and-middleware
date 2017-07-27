'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // : What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // this function calls the ui function (above), which removes all the children of a <ul> element, shows the element with id = about and hides it's siblings.  Then repoView.index calls the repos.with function (from repo.js) to get any items from repos.all that have the name key, usues the render function (above) (Handlebars.compile($('#repo-template').text())) to build some HTML and appends each of those into the ul in the #about element.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
