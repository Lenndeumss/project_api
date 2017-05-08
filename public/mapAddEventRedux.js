var connect  = require('react-redux').connect;
var MapAddEvent = require('./mapAddEvent');



function mapDispatchToProps(dispatch){
	return{
		onHandleClick: function(latlng) {
			//console.log(latlng);
			dispatch({type: 'Coord', coord: latlng});
		}
	}
}



var MapAddEventRedux = connect(
    null, 
    mapDispatchToProps
)(MapAddEvent);


module.exports = MapAddEventRedux;