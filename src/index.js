var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var hashHistory = ReactRouter.hashHistory;
var $ = jQuery = require('jquery');
var Bootstrap = require('bootstrap');
var App = require('./App');
var About = require('./About');
var Contact = require('./Contact');
var News = require('./News');
var NewsArticle = require('./NewsArticle');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/article/:nid" component={NewsArticle} />
      <Route path="/Contact" component={Contact} />
    </Route>
  </Router>
  , document.getElementById('wrapper')
  );
