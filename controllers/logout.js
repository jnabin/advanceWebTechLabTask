const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	req.session.userlist = "";
	res.clearCookie('uname');
	res.redirect('/login');
});

module.exports = router;