var React = require('react');
var $ = jQuery = require('jquery');
var Comment = require('./Comment');
var CommentForm = require('./CommentForm');
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
  handleCommentSubmit: function (comment) {
    var dataBody = {
      "_links":{
      "type":{
        "href": "http://api.shumpeikishi.com/rest/type/comment/comment"
        }
      },
      "uid":[{"target_id": 1}],
      "entity_id":[{"target_id": this.props.nid}],
      "entity_type":[{"value":"node"}],
      "comment_type":[{"target_id":"comment"}],


      "subject":[{"value":"New Comment"}],
      "comment_body":[
        {"value":"<p>" + comment.message + "</p>","format":"basic_html"}
      ]};

    $.ajax({
      url: Settings.api.url + 'entity/comment?' + Settings.api.format,
      dataType: 'hal+json',
      method: 'POST',
      headers: {
        "Accept": "application/hal+json",
        "Content-Type": "application/hal+json",
        "Authorization": "Basic c2h1bXBlaTpSVWZlaXIxMA==",
        "X-CSRF-Token": "WxxDVpLpkLNr375lyzl58U3SMcA6IpLycDXXnLUTt5o"
      },
      data: dataBody,
        success: function (data) {
          console.log(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.log(dataBody);
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
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
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <p></p>
      </div>
    );

  }
});
