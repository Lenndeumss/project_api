var React    = require('react');
var ReactDOM = require('react-dom');
var Router   = require('react-router-dom').StaticRouter;
var RouteApp = require('./route');


class RouterServer extends React.Component {

  constructor() {
    super();

  }

  render() {
  	var context = {};
    return (
    	<Router location={this.props.url} context={context}>
	      	<RouteApp/>
    	</Router> 
    );
  }
}

module.exports = RouterServer;