function userId(state="", action){
	if(action.type == "currentUserId"){
		return action.userId;
	} else {
		return state;
	}
}

module.exports = userId;