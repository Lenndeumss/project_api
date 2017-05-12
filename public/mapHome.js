var React     = require('react');
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import DivIcon from 'react-leaflet-div-icon';




class MapHome extends React.Component {
  constructor() {
    super();
    this.handleLocationFound  = this.handleLocationFound.bind(this);
    this.state = {
      hasLocation: false,
      latlng: {
        lat: 48.85,
        lng: 2.34,
      },
    };
  }

  handleLocationFound(e) {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    });
  }

  componentDidMount() {
    this.refs.map.leafletElement.locate();
  }


  render() {

    var markers = [];     
    for(var i=0; i<this.props.Events.length; i++) {
      var latlngMarker = {lat: this.props.Events[i].lat, lng:this.props.Events[i].lng};
      var DateHeure    = 'Date: '+this.props.Events[i].date+'\nHeure: '+this.props.Events[i].hour;
      markers.push(<Marker position={latlngMarker}><Popup><span>{DateHeure}</span></Popup></Marker>);
    }
    //console.log(markers);
    //console.log(this.state.latlng);


    //http://leafletjs.com/examples/custom-icons/leaf-green.png
  	return (
	  <Map onLocationfound={this.handleLocationFound} ref='map' id="mapHome" center={this.state.latlng} zoom={11}>
	    <TileLayer
	      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
	      attribution='Appli Lenny'
	    />
      {markers}
      <DivIcon position={this.state.latlng}>
        <svg className="user-location" viewBox="0 0 120 120" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50"/>
          <Popup><span>Ma Position</span></Popup>
        </svg>
      </DivIcon>
	  </Map>
	 )
  }
};

module.exports = MapHome;