const express = require('express');
router = express.Router();

router.get('/', (req, res)=>{
	console.log(req.cookies['uname']);
	if(req.cookies['uname']){
		res.render('home/index', {name: 'nabin', id : '123'});
	}else{
		res.redirect('/login');
	}
	
});

module.exports = router