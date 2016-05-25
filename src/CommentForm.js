var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {author: '', message: ''};
  },
  handleAuthorChange: function (e) {
    this.setState({author: e.target.value});
  },
  handleMessageChange: function (e) {
    this.setState({message: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var message = this.state.message.trim();
    if (!author || !message) {
      return;
    };
    console.log(this.props.onCommentSubmit);
    this.props.onCommentSubmit({author: author, message: message});

    this.setState({message: ''});
  },
  render: function () {
    return (

      <form className="comment-form" onSubmit={this.handleSubmit}>
      <legend>Add new comment</legend>
        <div class="form-group">
          <label>Name</label>
          <input
          type="text"
          className="form-control"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          />
          <label>Comment</label>
          <textarea
          className="form-control"
          onChange={this.handleMessageChange}
          value={this.state.message} />

          <input type="submit" className="btn btn-primary" value="Post"/>
        </div>
      </form>

    );
  }
});
