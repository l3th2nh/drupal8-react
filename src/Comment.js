var React = require('react');

module.exports = React.createClass({
  rawMarkup: function() {
    var rawMarkup = this.props.data.comment_body[0].value.toString();
    return { __html: rawMarkup };
  },
  render: function () {
    return (
      <div className="comment">
        <h4 className="comment-title">
          {this.props.data.subject[0].value}
        </h4>
        <div className="comment-body">
          <div dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
        <span>posted by {(this.props.data.name) ? this.props.data.name[0].value : 'anonymous'}</span>
      </div>
    );
  }
});
