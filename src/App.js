var React = require('react');
var Header = require('./Header');
var Home = require('./Home');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div id="content" className="content container">
          <div className="row">
            <div className="col-xs-8">
              {this.props.children || <Home />}
            </div>
          </div>
        </div>
      </div>
    )
  }
});
