// React
var React           = require('react');
var ReactDOM        = require('react-dom');
var Router 			= require('react-router-dom').BrowserRouter;
// Redux
var createStore     =  require('redux').createStore;
var Provider        =  require('react-redux').Provider;
var connect         = require('react-redux').connect;
// Composants
var RouteApp 		= require('./route');
// Reducer
var combineReducers = require('redux').combineReducers;
var Coord           = require('./mapAddEventReducer');

var globalReducers  = combineReducers({Coord});
// Store
const store         = createStore(globalReducers);



ReactDOM.render(  
    <Provider store={store}>
    	<Router>
  			<RouteApp/>
  	    </Router>
    </Provider>
  ,
  document.getElementById('container')
);