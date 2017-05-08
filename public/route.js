var React         = require('react');
var ReactDOM      = require('react-dom');
var Route         = require('react-router-dom').Route;
var HomeRedux     = require('./homeRedux');
var AddEventRedux = require('./addEventRedux');
var Connect       = require('./connect');


class RouteApp extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div>
	        <Route exact path="/"   component={Connect}/>
          <Route path="/home"     component={HomeRedux}/>
          <Route path="/addEvent" component={AddEventRedux}/>
    	</div> 
    );
  }
}

module.exports = RouteApp;