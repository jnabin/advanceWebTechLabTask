const express = require('express');
const userModel = require.main.require('./models/userModel')
router = express.Router();

router.get('*', (req, res, next)=>{
	if(req.cookies['uname']){
		next();
	}else{
		res.redirect('/login')
	}
});

router.get('/', (req, res)=>{
	res.render('home/index', {name: 'nabin', id : '123'});
	
});

router.get('/userlist', (req, res)=>{
	userModel.getAll(function(results){
		
		res.render('home/userlist', {users: results});
	});
	
	
});

module.exports = router