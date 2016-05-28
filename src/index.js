var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var RouteHandler = ReactRouter.RouteHandler;
var hashHistory = ReactRouter.hashHistory;
var $ = jQuery = require('jquery');
var Bootstrap = require('bootstrap');
var App = require('./App');
var Home = require('./Home');
var About = require('./About');
var Contact = require('./Contact');
var News = require('./News');
var NewsArticle = require('./NewsArticle');
var SinglePage = require('./SinglePage');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:nid" component={SinglePage} />
      <Route path="/news" component={News} />
      <Route path="/article/:nid" component={NewsArticle} />
      <Route path="/Contact" component={Contact} />
    </Route>
  </Router>
  , document.getElementById('wrapper')
  );
