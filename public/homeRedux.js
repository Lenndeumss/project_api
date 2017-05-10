var connect  = require('react-redux').connect;
var Home = require('./home');



function mapStateToProps(state) {
  return {
    Events: state.Events,
    userId : state.userId
  }
}

function mapDispatchToProps(dispatch){
	return{
		onHandleRefresh: function(data) {
			//console.log(data);
			dispatch({type: 'refresh', eventsRefresh: data});
		}
	}
}


var HomeRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Home);


module.exports = HomeRedux;