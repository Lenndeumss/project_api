var connect  = require('react-redux').connect;
var AddEvent = require('./addEvent');



function mapStateToProps(state) {
  return {
    Coord: state.Coord,
  }
}


var AddEventRedux = connect(
    mapStateToProps, 
    null
)(AddEvent);


module.exports = AddEventRedux;