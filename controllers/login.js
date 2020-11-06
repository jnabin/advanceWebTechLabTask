const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	if(req.body.username == req.body.password){
		var userlist = [
			['1', 'alamin', '123', 'alamin@gmail.com'],
			['2', 'nabin', '333', 'nabin@gmail.com']
		]
		req.session.userlist = userlist;
		req.session.userid = '2';
		userlist = req.session.userlist;
		res.cookie('uname', 'alamin');
		res.redirect('/home');
	}else{

		res.redirect('/login');
	}
	
	
} );

module.exports = router;