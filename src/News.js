var React = require('react');
var $ = jQuery = require('jquery');
var Node = require('./Node');
var Settings = require('./Settings.js');


module.exports = React.createClass({
  loadNodes: function () {
    $.get(Settings.api.url + 'nodes/articles' + '?' + Settings.api.format).done(function (nodes) {
      this.setState({data: nodes});
    }.bind(this));
  },
  componentDidMount: function () {
    this.loadNodes();
  },
  getInitialState: function () {
    return {data: []}
  },
  render: function () {
    var nodes = this.state.data.map(function (node) {
      return (
        <Node key={node.nid[0].value} data={node} type="news"/>
      );
    });

    return (
      <div>
        {nodes}
      </div>
    );
  }
});
