var React = require('react');
var Chat = require('./Chat');

module.exports = React.createClass({
  setInitialState: function () {
    return {data: []}
  },
  render: function () {
    return (
      <Chat />
    );

  }
});
