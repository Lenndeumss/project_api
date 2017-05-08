var connect  = require('react-redux').connect;
var Home = require('./home');



function mapStateToProps(state) {
  return {
    Events: state.Events,
  }
}


var HomeRedux = connect(
    mapStateToProps, 
    null
)(Home);


module.exports = HomeRedux;