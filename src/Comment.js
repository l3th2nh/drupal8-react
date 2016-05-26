var React = require('react');

module.exports = React.createClass({
  rawMarkup: function() {
    var rawMarkup = this.props.data.comment_body[0].value.toString();
    return { __html: rawMarkup };
  },
  render: function () {
    return (
      <div className="comment panel panel-default">
      <div className="panel-heading">
        <h4 className="comment__title panel-title">
          {this.props.data.subject[0].value}
        </h4>
      </div>
      <div className="panel-body">
        <div className="comment__body">
          <div dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
        <strong class="comment__author">Posted by {(this.props.data.field_comment_author) ? this.props.data.field_comment_author[0].value : 'anonymous'}</strong>
      </div>
      </div>
    );
  }
});
