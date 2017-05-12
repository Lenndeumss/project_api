var React = require('react');

class Help extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
    	<div>
	      	<a href="#myModalexample" className="btn">Help</a>
			<div id="myModalexample" className="modal">
			  <header className="bar bar-nav">
			    <a className="icon icon-close pull-right" href="#myModalexample"></a>
			    <h1 className="title">Comment fonctionne l'appli ?</h1>
			  </header>

			  <div className="content">
			    <p className="content-padded">The contents of my modal go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
			  </div>
			</div>
		</div>
    );
  }
}

module.exports = Help;