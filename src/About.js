var React = require('react');
var $ = jQuery = require('jquery');
var Node = require('./Node');
var Settings = require('./Settings.js');

module.exports = React.createClass({
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {
    this.props.loadNodes(36, function (data) {
      this.setState({data: [data]});
    }.bind(this));
  },
  render: function () {
    var nodes = this.state.data.map(function (node) {
      return (
        <Node key={node.nid[0].value} data={node}/>
      );
    });

    return (
      <div>
        {nodes}
      </div>
    );
  }
})
