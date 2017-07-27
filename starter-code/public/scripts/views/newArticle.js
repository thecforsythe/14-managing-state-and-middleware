'use strict';
var app = app || {};

(function(module) {
  const newArticle = {};

  // : What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // initNewArticlePage shows all elements with the tab-content class, hides elements with the id export-field, sets up listeners on the element with the id of article-json and two listeners on the element with id new-form.  The listener on #article-json selects that element when it gains focus.  The change listener on #new-form calls the newArticle.create function below which renders the preview article, and the submit listener calls the newArticle.submit function from below which inserts a record into the database.
  newArticle.initNewArticlePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function() {
      $(this).select();
    });
    $('#new-form').on('change', newArticle.create);
    $('#new-form').on('submit', newArticle.submit);
  };

  newArticle.create = function() {
    $('#articles').empty();
    let formArticle = new app.Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: new Date().toISOString()
    });

    formArticle.render = function() {
      let template = Handlebars.compile($('#article-template').text());

      this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
      this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
      this.body = marked(this.body);

      return template(this);
    };

    $('#articles').append(formArticle.render('#article-template'));
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  };

  newArticle.submit = function(event) {
    event.preventDefault();
    let article = new app.Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: new Date().toISOString()
    });

    article.insertRecord();
    window.location = '../';
  };

  newArticle.initNewArticlePage();
  module.newArticle = newArticle;
})(app);
