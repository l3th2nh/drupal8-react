var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function () {
    return (
      <ul className="nav navbar-nav menu-main">
        <li><Link to="/50" activeStyle={{ color: 'red' }}>Home</Link></li>
        <li><Link to="/36" activeStyle={{ color: 'red' }}>About</Link></li>
        <li><Link to="/news" activeStyle={{ color: 'red' }}>News</Link></li>
        <li><Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link></li>
      </ul>
    );

  }
});
