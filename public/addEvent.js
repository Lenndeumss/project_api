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
        lat  : this.props.Coord.lat,
        lng  : this.props.Coord.lng,
        event: this.state.event,
        name : this.state.name,
        hour : this.state.hour,
        date : this.state.date,
        desc : this.state.desc
    }

    if(this.state.event != undefined){
      fetch('/addEvent?data='+JSON.stringify(data))
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
          <h5>Sélectionner l'endroit de l'event :</h5>
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
        <Nav/>
      </div>
    );
  }
}

module.exports = AddEvent;