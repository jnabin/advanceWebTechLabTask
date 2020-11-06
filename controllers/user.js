const express 	= require('express');
const router 	= express.Router();

router.get('/create', (req, res)=>{
	
	if(req.cookies['uname']){
		res.render('user/create');
	}else{
		res.redirect('/login');
	}
});

router.post('/create', (req, res)=>{
	
	if(req.cookies['uname']){
		var user = [++req.session.userid, req.body.username, req.body.password, req.body.email];
		console.log(req.session.userid);
		console.log(req.body.email);
		var newlist = req.session.userlist;
		newlist.push(user);
		req.session.userlist = newlist;
		res.redirect('/home/userlist');
	}else{
		res.redirect('/login');
	}
});

router.get('/edit/:id', (req, res)=>{
	//res.send(req.params.id + "<br>" + req.params.name);
	if(req.cookies['uname']){
		var currentUser;
		var userlist = req.session.userlist;
		userlist.forEach(function(user){
			if(req.params.id == user[0]){
			    currentUser = {
					username : user[1],
					password : user[2],
					email : user[3]
				};
			}
		});

		res.render('user/edit', currentUser);
	}else{
		res.redirect('/login');
	}
});

router.post('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.send('updated');
	}else{
		res.redirect('/login');
	}
});

router.get('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var user = {username: 'alamin', password: '123', email: 'email@gmail.com'};
		res.render('user/delete', user);
	}else{
		res.redirect('/login');
	}
});

router.post('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.send('done!');
	}else{
		res.redirect('/login');
	}
});

module.exports = router;