var React = require('react');
var Header = require('./Header');
var Home = require('./Home');
var Sidebar = require('./Sidebar');
var $ = jQuery = require('jquery');
var Settings = require('./Settings.js');

module.exports = React.createClass({
  loadNodes: function (nid, callback) {
    console.log(nid);
    $.get(Settings.api.url + 'node/' + nid + '?' + Settings.api.format).done(function (node) {
      callback(node);
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <Header />
        <div id="content" className="content container">
          <div className="row">
            <div className="col-xs-8">
              {React.cloneElement(this.props.children, {loadNodes: this.loadNodes})}
            </div>
            <div className="col-xs-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    )
  }
});
