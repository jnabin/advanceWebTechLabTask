const express = require('express');
const router = express.Router();
const userModel = require.main.require('./models/userModel');
//const fs = require('fs');

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	// var data = fs.readFileSync('./controllers/userlist.json', 'utf8');
	// var userlist = JSON.parse(data);
	// var logged = false;

	// userlist.forEach(function(user){
	// 	if(req.body.username == user.username && req.body.password == user.password){
	// 		logged = true;
	// 	}
	// });
	
	// if(logged){
	// 	res.cookie('uname', req.body.username);
	// 	var userlist = [
	// 		['1', 'alamin', '123', 'alamin@gmail.com'],
	// 		['2', 'nabin', '333', 'nabin@gmail.com']
	// 	]
	// 	req.session.userlist = userlist;
	// 	req.session.userid = '2';
	// 	userlist = req.session.userlist;
	// 	res.redirect('/home');
		
	// }else{
	// 	res.redirect('/login');
	// }
	var user = {
		username : req.body.username,
		password : req.body.password
	}
	userModel.validate(user, function(status){
		if(status){
			res.cookie('uname', req.body.username);
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}
	});
	
	
} );

module.exports = router;