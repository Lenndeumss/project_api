function Events(state=[], action){
	if(action.type == "addEvent"){
		var eventsList = state.concat(action.event);
		return eventsList;
	} else if (action.type == "refreshEventsList") {
		//console.log(action.eventsList);
		return action.eventsList;
	} else if (action.type == "refresh") {
		//console.log(action.eventsRefresh.length);
		if(action.eventsRefresh.length == 0){
			//console.log(state);
			return state;
		} else{
			var eventsList = state.concat(action.eventsRefresh);
			//console.log(eventsList);
			return eventsList;
		}
	} else {
		return state;
	}
}

module.exports = Events;