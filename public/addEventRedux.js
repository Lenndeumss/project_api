var connect  = require('react-redux').connect;
var AddEvent = require('./addEvent');



function mapStateToProps(state) {
  return {
    Coord  : state.Coord,
    userId : state.userId
  }
}

function mapDispatchToProps(dispatch){
	return{
		onHandleClick: function(data) {
			//console.log(latlng);
			dispatch({type: 'addEvent', event: data});
		}
	}
}


var AddEventRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(AddEvent);


module.exports = AddEventRedux;