const db = require('./db');

module.exports = {
	validate: function(user, callback){
		var sql = "select * from user where username = '"+user.username+"' and password = '"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false)
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results)
		});
	},
	insert: function(user, callback){
		var sql = "insert into user (username, password, email) values ('"+user.username+"', '"+user.password+"', '"+user.email+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		console.log(user);
		var sql = "update user set username = '"+user.username+"', password = '"+user.password+"', email = '"+user.email+"' where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}

