var React = require('react');
var $ = jQuery = require('jquery');
var Comment = require('./Comment');
var Settings = require('./Settings');
module.exports = React.createClass({
  loadComments: function () {
    $.get(Settings.api.url + '/comments/export/' + this.props.nid).done(function (data) {
      this.setState({data: data});
    }.bind(this));
  },
  componentDidMount: function () {
    this.loadComments();
  },
  getInitialState: function () {
    return {data: []};
  },
  render: function () {
    var comments = this.state.data.map(function (comment) {
      return (
        <Comment key={comment.cid[0].value} data={comment} />
      );
    });

    return (
      <div className="comments">
        <h3 className="comments-header">Comments</h3>
        {comments}
      </div>
    );

  }
});
