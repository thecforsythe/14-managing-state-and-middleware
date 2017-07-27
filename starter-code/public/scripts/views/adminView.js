'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    // : What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
    //initAdminPage sets up our Handlebars template (the compile function).  Then it looks at the array returned from the numWordsByAuthor function in article.js and appends the html returned from the template for each item in that array.  After that it changes the text on the $('#blog-stats .articles') element to be the number of items in the Article.all array and changes the text in the $('#blog-stats .words') element to be the value returned from the app.Article.numWordsAll() function from article.js.  initAdminPage is called on line 16 below.
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
