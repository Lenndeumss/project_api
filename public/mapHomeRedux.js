var connect  = require('react-redux').connect;
var mapHome = require('./mapHome');



function mapStateToProps(state) {
  return {
    Events: state.Events
  }
}

var MapHomeRedux = connect(
    mapStateToProps, 
    null
)(mapHome);


module.exports = MapHomeRedux;