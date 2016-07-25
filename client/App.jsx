
import $ from 'jquery';
import 'styles/main.scss';
import home from 'pages/home';
import todo from 'pages/todo';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';
import footer from 'components/footer';

$(function(){

  header.init();
  footer.init();

// what page are we on?
  var url = window.location.pathname;

// our first JS router
  switch (url) {
    case '/pages/todo.html':
        todo.init();
    break;
    case '/': case '':
        home.init();
    break;
    case '/pages/funnySquares.html':
        funnySquares.init();
    break;
  }

});
