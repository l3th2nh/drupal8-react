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
    var getCsrfToken = function (callback) {
      $.get(Settings.api.url + '/rest/session/token').done(function (data) {
        var csrfToken = data;
        callback(csrfToken, comment);
      });
    };

    var newComment = {
      "_links":{
        "type":{
          "href": "http://api.shumpeikishi.com/rest/type/comment/comment"
        },
        "http://api.shumpeikishi.com/rest/relation/comment/comment/entity_id":[
          {
            "href": "http://api.shumpeikishi.com/node/" + this.props.nid + "?_format=hal_json"
          }
          ],
        "http://api.shumpeikishi.com/rest/relation/comment/comment/uid":[
          {
            "href": "http://api.shumpeikishi.com/user/1?_format=hal_json",
            "lang": "en"
          }
        ]
      },
      "uid":[{"target_id": 1}],
      "entity_id":[{"target_id": this.props.nid}],
      "entity_type":[{"value":"node"}],
      "comment_type":[{"target_id":"comment"}],
      "subject":[{"value": comment.subject}],
      "comment_body":[
        {"value":"<p>" + comment.message + "</p>","format":"basic_html"}
      ],
      "field_comment_author": [
        {"value": comment.author}
      ]
    };

    var postComment = function (csrfToken, comment) {
      $.ajaxSetup({ cache: false });
      $.ajax({
        url: Settings.api.url + 'entity/comment?' + Settings.api.format,
        method: 'POST',
        headers: {
          "Content-Type": "application/hal+json",
          "Authorization": "Basic YXBpOkNhdHNBbmREb2dz",
          "X-CSRF-Token": csrfToken
          },
        data: JSON.stringify(comment),
        success: function (data) {
          this.loadComments();
          }.bind(this),
        error: function(xhr, status, err) {
            console.error(status, err);
          }.bind(this)
      });
    }.bind(this);

    getCsrfToken(function (csrfToken) {
      postComment(csrfToken, newComment);
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
