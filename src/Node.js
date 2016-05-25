var React = require('react');
var ReactDOM = require('react-dom');
var $ = jQuery = require('jquery');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Settings = require('./Settings');
var Comments = require('./Comments');

module.exports = React.createClass({
  render: function () {
    return(
      <div className={"node " + "node--" + this.props.data.nid[0].value}>
        <h2 className="node__title">
        {(() => {
          switch(this.props.type) {
            case "news": return <Link to={"/article/" + this.props.data.nid[0].value}>{this.props.data.title[0].value}</Link>
            default: return this.props.data.title[0].value
          }
        } )()}
        </h2>
        <div className="node__body">
          {this.props.data.body[0].value}
        </div>
        {(()=> {
          if (this.props.data.comment[0].comment_count != 0 && this.props.type != 'news') {
            return (<Comments nid={this.props.data.nid[0].value} />);
          }
        })()}
      </div>
    );
  }
});
