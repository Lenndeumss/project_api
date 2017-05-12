var connect  = require('react-redux').connect;
var Profil = require('./profil');



function mapStateToProps(state) {
  return {
  	Events: state.Events,
    userId : state.userId
  }
}

function mapDispatchToProps(dispatch){
	return{
		onHandleClick: function(data) {
			//console.log();
			dispatch({type: 'refreshEventsList', eventsList: data});
		}
	}
}


var ProfilRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Profil);


module.exports = ProfilRedux;