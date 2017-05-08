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
app.use(express.static('public'));
app.use(
 session({ 
  secret: 'a4f8071f-c873-4447-8ee2',
  resave: false,
  saveUninitialized: false,
 })
);


mongoose.connect('mongodb://localhost/lennyApp' , function(err) {

});
var eventSchema = mongoose.Schema({
    lat   : String,
    lng   : String,
    event : String,
    name  : String,
    hour  : String,
    date  : String,
    desc  : String,
    idUser: String
  },
  { collection: 'eventslist' }
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
			if (userLog.username == data[i].username && userLog.password == data[i].password) {
				req.session.isLog = true;
				req.session.username = data[i].username;
          		req.session.password = data[i].password;
			} else {
				req.session.isLog = false;
			}
		};

		if (req.session.isLog = true) {
			res.send('logOK');
		} else {
			res.send('logKO');
		}
	});

});

app.get("/addEvent", function(req, res){
	newEvent = JSON.parse(req.query.data);
	console.log(newEvent);
	UserModel.findOne({ user : req.session.username}, function (err, user) {
		//console.log(user.id);
		if(user != null) {
	        var event = new EventModel({ 
	            lat    : newEvent.lat,
	            lng    : newEvent.lng,
	            event  : newEvent.event,
				name   : newEvent.name,
				hour   : newEvent.hour,
				date   : newEvent.date,
				desc   : newEvent.desc,
				idUser : user.id
	        });    
	        event.save(function (error, event) {  
	          res.send('eventOK');
	        });
	    } else {
	      	res.send('eventKO');
	    }
	});

});


app.get('/', function(req, res) {
    // var AppHtml = ReactDOMServer.renderToString(App({url: '/'}));
    EventModel.find(function(err, events){
    	var eventsList = events;
    	//console.log(eventsList);
    	res.render("index", {events: eventsList});
    });
});




var port = (process.env.PORT || 8080);
app.listen(port, function(){
	console.log("server listening on port 8080");
});