var React = require('react');
var Nav   = require('./nav');


class Profil extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
  	//console.log(e.target.getAttribute("data-name"));
  	//console.log(e.target.getAttribute("data-userId"));
  	let deleteEvent = {
  	  	name   : e.target.getAttribute("data-name"),
  	  	userId : e.target.getAttribute("data-userId")
  	};
  	var objProfil = this;
    fetch('/delete?data='+JSON.stringify(deleteEvent))
        .then(function(data) { return data.json()} )
        .then(function(data) {
            objProfil.props.onHandleClick(data);
            //console.log(myEvents);
        });
  }


  render() {
  	var myEvents = [];
  	for (var i = 0; i < this.props.Events.length; i++) {
  		if (this.props.Events[i].userId == this.props.userId) {
  			myEvents.push(<li className="table-view-cell">{this.props.Events[i].name}<span onClick={this.handleClick} data-userId={this.props.Events[i].userId}  data-name={this.props.Events[i].name} className="icon icon-close"></span></li>);
  			console.log(this.props.Events[i].name);
  		}
  	}

    return (
    	<div>
	    	<div className="content">
	    		<div className="content-padded">
		    		<h3>Mes Events en cours :</h3>
			      	<ul className="table-view">
					  {myEvents}
					</ul>
				</div>
			</div>
			<Nav/>
		</div>

    );
  }
}

module.exports = Profil;