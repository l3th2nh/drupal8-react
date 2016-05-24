var React = require('react');
var MobileMenuButton = require('./MobileMenuButton');
var NavbarCollapse = require('./NavbarCollapse');

module.exports = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <MobileMenuButton />
            <a className="navbar-brand" href="#">Reacting Drupal</a>
          </div>
          <NavbarCollapse />
        </div>
      </nav>
    )
  }
});
