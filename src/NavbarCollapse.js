var React = require('react');
var $ = jQuery = require('jquery');
var MainMenu = require('./MainMenu');

module.exports = React.createClass({
  getInitialState: function () {
    return {menus: []};
  },
  loadMenuItems: function () {
    $.get('http://api.shumpeikishi.com/menus/main?_format=hal_json', function (data) {
      this.setState({menus: data});
    }.bind(this));
  },
  componentDidMount: function () {
    this.loadMenuItems();
  },
  render: function () {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <MainMenu menus={this.state.menus} />
      </div>
    );
  }
});
