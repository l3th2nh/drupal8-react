var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {author: '', message: '', }
  },
  handleAuthorChange: function (e) {
    this.setState({author: e.target.value});
  },
  handleMessageChange: function (e) {
    this.setState({message: e.target.value});
  },
  handleChatSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var message = this.state.message.trim();
    if (!author || !message) {return;}
    this.props.onChatSubmit({author: author, message: message});
    this.setState({message: ''});
  },
  render: function () {
    return (
      <form onSubmit={this.handleChatSubmit}>
      <div className="form-group">
      <label>Name: </label>
        <input
          type="text"
          className="form-control"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          />
        <label>Message: </label>
        <input
          type="text"
          className="form-control"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleMessageChange}
          />
      </div>
      <input type="submit" className="btn btn-primary" value="Post"/>
      </form>
    )
  }
})
