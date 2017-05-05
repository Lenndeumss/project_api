var React     = require('react');
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import DivIcon from 'react-leaflet-div-icon';





class MapAddEvent extends React.Component {
  constructor() {
    super();
    this.handleLocationFound = this.handleLocationFound.bind(this);
    this.componentDidMount   = this.componentDidMount.bind(this);
    this.handleClick         = this.handleClick.bind(this);
    this.state = {
      hasLocation: false,
      latlng: {
        lat: 48.85,
        lng: 2.34,
      },
      latlngMarker: {
      	lat: 48.85,
      	lng: 2.34,
      }
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

  handleClick(e){
  	this.setState({latlngMarker: e.latlng})
  	this.props.onHandleClick(this.state.latlngMarker);
  	console.log('OK');
  }

  render() {
  	return (
	  <Map onLocationfound={this.handleLocationFound}
	  	   onClick={this.handleClick}
	  	   ref='map' 
	  	   id='mapHome' 
	  	   center={this.state.latlng} 
	  	   zoom={11}
	  >
	    <TileLayer
	      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
	      attribution='Appli Lenny'
	    />
	    <Marker position={this.state.latlngMarker}>
	      <Popup>
	        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
	      </Popup>
	    </Marker>
	  </Map>
	)
  }
};

module.exports = MapAddEvent;