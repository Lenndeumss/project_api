var React       = require('react');
var Nav         = require('./nav');
var MapAddEventRedux = require('./mapAddEventRedux');
import {Redirect} from 'react-router';


class AddEvent extends React.Component {

  constructor() {
    super();
    this.handleChange  = this.handleChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.state = {redirect: false};
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});

  }

  handleSubmit(e){
    e.preventDefault()
    //console.log(this.props.Coord.lat);
    let data = {
        lat    : this.props.Coord.lat,
        lng    : this.props.Coord.lng,
        event  : this.state.event,
        name   : this.state.name,
        hour   : this.state.hour,
        date   : this.state.date,
        desc   : this.state.desc,
        userId : this.props.userId
    }

    if(this.state.event != undefined){

      this.props.onHandleClick(data);

      fetch(serverPath+'addEvent?data='+JSON.stringify(data))
      .then(() => this.setState({ redirect: true }));
    } else {
      alert("Choisir un Type d'événement !");
    }
  }



  render() {
    if (this.state.redirect == true) {
      return (<Redirect to="/home"/>);
    }

    return (
      <div>
        <div className="content">
          <div className="content-padded">
            <h4>Sélectionner l'endroit de l'event :</h4>
            <MapAddEventRedux/>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.props.Coord.lat+", "+this.props.Coord.lng} placeholder="Coordonnées" name="coord"/>
              <select onChange={this.handleChange} size="1" name="event">
                <option>Type de l'Event :</option>
                <option>Teuff</option>
                <option>After</option>
                <option>Before</option>
                <option>Apéro</option>
              </select>
              <input onChange={this.handleChange} type="text" placeholder="Nom de l'Event" name="name"/>
              <input onChange={this.handleChange} type="date" placeholder="Date" name="date"/>
              <input onChange={this.handleChange} type="text" placeholder="Heure" name="hour"/>
              <textarea onChange={this.handleChange} placeholder="Description" rows="4" name="desc"></textarea>
              <button type="submit" className="btn btn-primary btn-block btn-outlined">Valider</button>
            </form>
          </div>
        </div>
        <Nav/>
      </div>
    );
  }
}

module.exports = AddEvent;