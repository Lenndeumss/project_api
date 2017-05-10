var connect  = require('react-redux').connect;
var Login = require('./login');



function mapDispatchToProps(dispatch){
	return{
		onHandleSubmit: function(userId) {
			//console.log();
			dispatch({type: 'currentUserId', userId: userId});
		}
	}
}



var LoginRedux = connect(
    null, 
    mapDispatchToProps
)(Login);


module.exports = LoginRedux;