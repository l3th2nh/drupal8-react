var React = require('react');
var $ = jQuery = require('jquery');
var Settings = require('./Settings');
var ChatMessage = require('./ChatMessage');

module.exports = React.createClass({
  loadChatMessages: function () {
    $.get(Settings.api.url + 'rest/chat?' + Settings.api.format).done(function (data) {
      console.log(data);
      this.setState({data: data});
    }.bind(this));
  },
  componentDidMount: function () {
    this.loadChatMessages();
  },
  getInitialState: function () {
    return {data: []};
  },
  render: function () {
    var messages = this.state.data.map(function (msg) {
      return (
        <ChatMessage data={msg} key={msg.nid[0].value} />
      );
    });
    return (
      <div className="chat well well-sm">
        <h3 className="chat-heading">Live Chat</h3>
        {messages}
      </div>
    );
  }
});
