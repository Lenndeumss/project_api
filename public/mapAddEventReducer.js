function Coord(state=null, action){
	if(action.type == "Coord"){
		return action.coord;
	} else {
		return state;
	}
}

module.exports = Coord;