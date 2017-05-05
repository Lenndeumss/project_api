var React       = require('react');
var Nav         = require('./nav');
var MapAddEventRedux = require('./mapAddEventRedux');


class AddEvent extends React.Component {

  constructor() {
    super();

  }



  render() {
    return (
      <div>
        <div className="content">
          <h5>Sélectionner l'endroit de l'event :</h5>
          <MapAddEventRedux/>
          <input type="text" value={this.props.Coord} placeholder="Coordonnées"/>
          <form>
            <select size="1" name="Event">
              <option>Teuff</option>
              <option>After</option>
              <option>Before</option>
              <option>Apéro</option>
            </select>
            <input type="text" placeholder="Nom de l'Event"/>
            <input type="date" placeholder="Date"/>
            <input type="text" placeholder="Heure"/>
            <textarea placeholder="Description" rows="4"></textarea>
            <button type="submit" className="btn btn-primary btn-block btn-outlined">Valider</button>
          </form>
        </div>
        <Nav/>
      </div>
    );
  }
}

module.exports = AddEvent;