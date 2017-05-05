var React = require('react');
var Link = require('react-router-dom').Link;

class Nav extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
      <nav id="nav" className="bar bar-tab">
        <Link className="tab-item active" data-ignore="push" to="/">
		    <span className="icon icon-home"></span>
		    <span className="tab-label">Home</span>
		</Link>
        <Link className="tab-item" data-ignore="push" to="/">
		    <span className="icon icon-person"></span>
		    <span className="tab-label">Profile</span>
		</Link>
        <Link className="tab-item" data-ignore="push" to="/addEvent">
            <span className="icon icon-compose"></span>
    		<span className="tab-label">Add Event</span>
        </Link>
      </nav>
    );
  }
}

module.exports = Nav;