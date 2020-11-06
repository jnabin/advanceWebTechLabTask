const express = require('express');
const bodyParser = require('body-parser');
const exsession = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const login = require('./controllers/login');
const home = require('./controllers/home');
const user				= require('./controllers/user');
const logout = require('./controllers/logout');
const port = 3000;

//configuration
app.set('view engine', 'ejs');


//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exsession({secret: 'hello', saveUninitialized: true, resave: false}));

app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/user', user);


//router
app.get('/', (req, res)=>{
	res.send('welcome to this node');
});

//server stratup
app.listen(port, (error) => {
	console.log('server started at '+port);
});