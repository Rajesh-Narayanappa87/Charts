var mysql = require('mysql');

var mysqlConnectionString = require('./mysqlConnectionString');

var mysqlConnectionStringProvider = {
		
		getConnection :function(){
			
			var connection = mysql.createConnection(mysqlConnectionString.mysqlConnectionString.Env.qa);
			
			connection.connect(function(err){
				if(err){
					console.log(err);
				}
			});
			return connection;
		},
		
		
		closeMySqlConnection :function(currentConnection){
			
			if(currentConnection){
				
				currentConnection.end(function(err){
					if(err){
						console.log(err);
					}
					
				});
			}
		}
};


module.exports.mysqlConnectionStringProvider = mysqlConnectionStringProvider;