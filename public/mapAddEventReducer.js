function Coord(state={lat: 48.85, lng: 2.34}, action){
	if(action.type == "Coord"){
		return action.coord;
	} else {
		return state;
	}
}

module.exports = Coord;