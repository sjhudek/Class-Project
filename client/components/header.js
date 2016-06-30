
import $ from 'jquery';
import navbar from 'templates/navbar.html';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('header').append(navbar);
    // what page is this
    // var url = window.location.pathname;

    // based on url, determine which nav item
    // ...

    // find the nav item for this page
    // add a class to that nav item
    // $('ul.nav').eq(1).addClass('active');
  }
};

module.exports = app;
