// require('babel-core/register')({
//   presets: ["react", "es2015"]
// })

// var React = require('react');
// var ReactDOM = require('react-dom');
// var ReactDOMServer = require('react-dom/server');

// var App = React.createFactory(require('./public/routerServer'));
var express     = require('express');
var session     = require('express-session');
var mongoose    = require('mongoose');
var app 		= express();

app.set('view engine', 'ejs');
app.use(express.static('public', {index: false}));
app.use(
 session({ 
  secret: 'a4f8071f-c873-4447-8ee2',
  resave: false,
  saveUninitialized: false,
 })
);


mongoose.connect('mongodb://Lenny:c1475369@ds137121.mlab.com:37121/events_app' , function(err) {

});
var eventSchema = mongoose.Schema({
    lat    : Number,
    lng    : Number,
    event  : String,
    name   : String,
    hour   : String,
    date   : String,
    desc   : String,
    userId : String
  },
  { collection: 'eventslist', timestamps: true}
);
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email   : String
  },
  { collection: 'userslist' }
);
var UserModel  = mongoose.model('userslist', userSchema);
var EventModel = mongoose.model('eventslist', eventSchema);


app.get("/register", function(req, res){
	newUser = JSON.parse(req.query.data);
	//console.log(newUser);
	var user = new UserModel({
		username : newUser.username,
		email    : newUser.email,
		password : newUser.password
	});
	user.save(function (err, data) {
	});
	res.send('registerOK');

});


app.get("/login", function(req, res){
	userLog = JSON.parse(req.query.data);

	UserModel.find(function (err, data) {
		//console.log(data.length);
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
			console.log(userLog);
			if (userLog.username == data[i].username && userLog.password == data[i].password) {
				req.session.isLog    = true;
				req.session.username = data[i].username;
          		req.session.userId   = data[i].id;
			} else {
				req.session.isLog    = false;
			}
		};

		if (req.session.isLog = true) {
			userId = req.session.userId;
			console.log(userId);
			res.send(userId);
		} else {
			res.send('logKO');
		}
	});

});

app.get("/addEvent", function(req, res){
	newEvent = JSON.parse(req.query.data);
	//console.log(newEvent);
	UserModel.findOne({ user : req.session.username}, function (err, user) {
		//console.log(user.id);
		if(user != null) {
	        var event = new EventModel({ 
	            lat        : newEvent.lat,
	            lng        : newEvent.lng,
	            event      : newEvent.event,
				name       : newEvent.name,
				hour       : newEvent.hour,
				date       : newEvent.date,
				desc       : newEvent.desc,
				userId     : newEvent.userId
	        });    
	        event.save(function (error, event) {  
	          res.send('eventOK');
	        });
	    } else {
	      	res.send('eventKO');
	    }
	});

});


app.get('/refresh', function(req, res){

	//console.log(Date(req.query.lastupdate));
	EventModel.find({"createdAt": {"$gte": req.query.lastupdate}}, function(err, event){
	var tabEvents = [];
		//console.log(event);
		for (var i = 0; i < event.length; i++) {
			if(req.query.userId != event[i].userId){
				tabEvents.push(event[i]);
			}
		}
	res.json(tabEvents);
	});
	
});

app.get('/delete', function(req, res){
	//Optimisable !
	var eventDelete = JSON.parse(req.query.data);
	console.log(eventDelete);
	EventModel.remove({ name: eventDelete.name, userId: eventDelete.userId}, function(error) {
		EventModel.find(function(err, events){
	    	var eventsList = events;
	    	//console.log(eventsList);
	    	res.json(eventsList);
	    });
	});
	
});


app.get('/', function(req, res) {
    //var AppHtml = ReactDOMServer.renderToString(App({url: '/'}));
    EventModel.find(function(err, events){
    	var eventsList = events;
    	//console.log(eventsList);
    	res.render("index", {eventsHydrate: eventsList});
    });
});




var port = (process.env.PORT || 8080);
app.listen(port, function(){
	console.log("server listening on port 8080");
});