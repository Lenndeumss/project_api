var React         = require('react');
var ReactDOM      = require('react-dom');
var Route         = require('react-router-dom').Route;
var HomeRedux     = require('./homeRedux');
var AddEventRedux = require('./addEventRedux');
var ProfilRedux   = require('./profilRedux');
var Connect       = require('./connect');
import {Redirect} from 'react-router';

class RouteApp extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <Redirect from='/index.html' to='/'/>
	        <Route exact path="/"   component={Connect}/>
          <Route path="/home"     component={HomeRedux}/>
          <Route path="/addEvent" component={AddEventRedux}/>
          <Route path="/profil"   component={ProfilRedux}/>
    	</div> 
    );
  }
}

module.exports = RouteApp;