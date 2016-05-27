var React = require('react');

module.exports = React.createClass({
  render: function () {
    return(
      <p>
      <small>{this.props.data.field_chat_name ? this.props.data.field_chat_name[0].value : 'anonymous'} : </small>
        {this.props.data.field_chat_message[0].value} <br />

      </p>
    )
  }
});
