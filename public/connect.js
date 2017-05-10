var React    = require('react');
var Register = require('./register');
var LoginRedux    = require('./loginRedux');


class Connect extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <div className="content">
        <div className="segmented-control">
          <a className="control-item" href="#item1mobile">
            Register
          </a>
          <a className="control-item active" href="#item2mobile">
            Login
          </a>
        </div>
        <div className="card">
          <div id="item1mobile" className="control-content connectResize">
            <Register/>
          </div>
          <div id="item2mobile" className="control-content connectResize active">
            <LoginRedux/>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Connect;
