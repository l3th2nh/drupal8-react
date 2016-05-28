var React = require('react');
var $ = jQuery = require('jquery');
var Settings = require('./Settings');
var ChatMessage = require('./ChatMessage');
var ChatForm = require('./ChatForm');

module.exports = React.createClass({
  loadChatMessages: function () {
    $.get(Settings.api.url + 'rest/chat?' + Settings.api.format).done(function (data) {
      this.setState({data: data.reverse()});
    }.bind(this));
  },
  componentDidMount: function () {
    this.loadChatMessages();
  },
  handleChatSubmit: function (chat) {
    var getCsrfToken = function (callback) {
      $.get(Settings.api.url + '/rest/session/token').done(function (data) {
        var csrfToken = data;
        callback(csrfToken, chat);
      });
    };

    var newMessage = {
      "_links": {
          "type": {
            "href": "http://api.shumpeikishi.com/rest/type/node/chat_message"
          }
        },
        "type": {
          "target_id": "chat_message"
        },
        "title": {
          "value": "New Chat Message"
        },
        "field_chat_message": [
          {
            "value": chat.message
        	}
        ],
        "field_chat_name": [
          {
            "value": chat.author
          }
        ]
      };

      var postChat = function (csrfToken, chat) {
        $.ajaxSetup({ cache: false });
        $.ajax({
          url: Settings.api.url + 'entity/node?' + Settings.api.format,
          method: 'POST',
          headers: {
            "Content-Type": "application/hal+json",
            "Authorization": "Basic YXBpOkNhdHNBbmREb2dz",
            "X-CSRF-Token": csrfToken
            },
          data: JSON.stringify(chat),
          success: function (data) {
            this.loadChatMessages();
            }.bind(this),
          error: function(xhr, status, err) {
              console.error(status, err);
            }.bind(this)
        });
      }.bind(this);

      getCsrfToken(function (csrfToken) {
        postChat(csrfToken, newMessage);
      });
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
        <ChatForm onChatSubmit={this.handleChatSubmit} />
      </div>
    );
  }
});
