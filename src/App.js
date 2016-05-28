var React = require('react');
var Header = require('./Header');
var Home = require('./Home');
var Sidebar = require('./Sidebar');

module.exports = React.createClass({
  render: function () {
    console.log(this);
    return (
      <div>
        <Header />
        <div id="content" className="content container">
          <div className="row">
            <div className="col-xs-8">
              {this.props.children}
            </div>
            <div className="col-xs-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    )
  }
});
