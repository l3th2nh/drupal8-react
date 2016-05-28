var React = require('react');
var $ = jQuery = require('jquery');
var Node = require('./Node');
var Settings = require('./Settings.js');

module.exports = React.createClass({
  loadNode: function () {
    $.get(Settings.api.url + 'node/' + this.state.nid + '?' + Settings.api.format).done(function (node) {
      this.setState({data: [node]});
    }.bind(this));
  },
  getInitialState: function () {
    return {
      data: [],
      nid: 50
    };
  },
  componentWillReceiveProps: function () {
    this.setState({nid: this.props.route.nid});
  },
  componentDidMount: function () {
    this.loadNode();
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
