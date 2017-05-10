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
    console.log(this.state.latlng);

  	return (
	  <Map onLocationfound={this.handleLocationFound} ref='map' id="mapHome" center={this.state.latlng} zoom={11}>
	    <TileLayer
	      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
	      attribution='Appli Lenny'
	    />
      {markers}
	  </Map>
	 )
  }
};

module.exports = MapHome;