var React         = require('react');
var ReactDOM      = require('react-dom');
var Route         = require('react-router-dom').Route;
var Home          = require('./home');
var AddEventRedux = require('./addEventRedux');
var Register      = require('./register');


class RouteApp extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div> 
	        <Route exact path="/" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route path="/addEvent" component={AddEventRedux}/>
    	</div> 
    );
  }
}

module.exports = RouteApp;