var React = require('react');

module.exports = React.createClass({
  rawMarkup: function() {
    var rawMarkup = this.props.data.comment_body[0].value.toString();
    return { __html: rawMarkup };
  },
  render: function () {
    return (
      <div className="comment">
        <h4 className="comment__title">
          {this.props.data.subject[0].value}
        </h4>
        <div className="comment__body">
          <div dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
        <strong class="comment__author">Posted by {(this.props.data.name) ? this.props.data.name[0].value : 'anonymous'}</strong>
      </div>
    );
  }
});
