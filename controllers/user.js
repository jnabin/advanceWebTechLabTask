const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel')

router.get('*', (req, res, next)=>{
	if(req.cookies['uname']){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/create', (req, res)=>{
	
	res.render('user/create');
	
});

router.post('/create', (req, res)=>{
	
	// if(req.cookies['uname']){
	// 	var user = [++req.session.userid, req.body.username, req.body.password, req.body.email];
	// 	console.log(req.session.userid);
	// 	console.log(req.body.email);
	// 	var newlist = req.session.userlist;
	// 	newlist.push(user);
	// 	req.session.userlist = newlist;
	// 	res.redirect('/home/userlist');
	// }else{
	// 	res.redirect('/login');
	// }
	var user = {
		username : req.body.username,
		password : req.body.password,
		email : req.body.email
	}
	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/user/create');
		}
	});
});

router.get('/edit/:id/:username/:password/:email', (req, res)=>{
	//res.send(req.params.id + "<br>" + req.params.name);
	// if(req.cookies['uname']){
	// 	var currentUser;
	// 	var userlist = req.session.userlist;
	// 	userlist.forEach(function(user){
	// 		if(req.params.id == user[0]){
	// 		    currentUser = {
	// 				username : user[1],
	// 				password : user[2],
	// 				email : user[3]
	// 			};
	// 		}
	// 	});

	// 	res.render('user/edit', currentUser);
	// }else{
	// 	res.redirect('/login');
	// }
	var currentUser = {
		username: req.params.username,
		password: req.params.password,
		email : req.params.email
	};
	res.render('user/edit', currentUser);
});

router.post('/edit/:id/:username/:password/:email', (req, res)=>{
	
	// if(req.cookies['uname'] != ""){
	// 	var userlist = req.session.userlist;
	// 	userlist.forEach(function(user, index){
	// 		if(req.params.id == user[0]){
	// 			userlist[index][1] = req.body.username;
	// 			userlist[index][2] = req.body.password;
	// 			userlist[index][3] = req.body.email;
	// 		}
	// 	});
	// 	req.session.userlist = userlist;
	// 	res.redirect('/home/userlist');
	// }else{
	// 	res.redirect('/login');
	// }
	var user = {
		id : req.params.id,
		username: req.body.username,
		password: req.body.password,
		email : req.body.email
	};
	userModel.update(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/user/edit');
		}
	});
});

router.get('/delete/:id/:username/:password/:email', (req, res)=>{
	
	// if(req.cookies['uname']){
	// 	var userlist = req.session.userlist;
	// 	var duser;
	// 	userlist.forEach(function(user){
	// 		if(req.params.id == user[0]){
	// 			duser = {
	// 				username : user[1],
	// 				password : user[2],
	// 				email : user[3]
	// 			};
	// 		}
	// 	});
	// 	res.render('user/delete', duser);
	// }else{
	// 	res.redirect('/login');
	// }
	var currentUser = {
		username: req.params.username,
		password: req.params.password,
		email : req.params.email
	};
	res.render('user/delete', currentUser);
});

router.post('/delete/:id/:username/:password/:email', (req, res)=>{
	
	// if(req.cookies['uname']){
	// 	var userlist = req.session.userlist;
	// 	var deleteuser;
	// 	userlist.forEach(function(user,index){
	// 		if(req.params.id == user[0]){
	// 			deleteuser = user;
	// 		}
	// 	});
	// 	var newuserlist = userlist.filter(function(value){
	// 		return value != deleteuser;
	// 	});
	// 	req.session.userlist = newuserlist;
	// 	res.redirect('/home/userlist');

	// }else{
	// 	res.redirect('/login');
	// }
	var user = {
		id : req.params.id
	};
	userModel.delete(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/user/delete');
		}
	});
});

module.exports = router;