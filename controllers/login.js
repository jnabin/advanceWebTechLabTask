const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	if(req.body.username == req.body.password){

		res.cookie('uname', 'alamin');
		res.redirect('/home');
	}else{

		res.redirect('/login');
	}
	
	
} );

module.exports = router;