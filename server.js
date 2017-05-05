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
    coord: String,
    event: String,
    name: String,
    hour: String,
    date: String,
    desc: String
});
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    events: [eventSchema]
  },
  { collection: 'userslist' }
);
var UserModel = mongoose.model('userslist', userSchema);



app.get("/register", function(req, res){
	newUser = JSON.parse(req.query.data);

	var user = new UserModel({
		username : newUser.username,
		email : newUser.email,
		password : newUser.password
	});
	user.save(function (err, data) {
	});

	UserModel.find(function (err, data) {
		//console.log(data.length);
		for (var i = 0; i < data.length; i++) {
			if (newUser.username == data[i].username && newUser.password == data[i].password) {
				req.session.isLog = true;
			} else {
				req.session.isLog = false;
			}
		};

		if (req.session.isLog = true) {
			res.send('OK');
		} else {
			res.send('KO');
		}
	});

});


app.get('/', function(req, res) {
  // var AppHtml = ReactDOMServer.renderToString(App({url: '/'}));
	res.render("index");
});




var port = (process.env.PORT || 8080);
app.listen(port, function(){
	console.log("server listening on port 8080");
});