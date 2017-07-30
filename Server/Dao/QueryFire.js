var connectionProvider = require('../../mysqlConnectionStringProvider');

var queryfire = {
		
		getProjects: function(OnSuccessfulCallback){
			var query = "Select ProjectName from summary";
			
			
			var connection = connectionProvider.mysqlConnectionStringProvider.getConnection();
			
			if(connection){
				connection.query(query, function(err, rows, result){
					
					if(err){
						console.log(err);
					}
					console.log(rows);
					OnSuccessfulCallback(rows);					
				});
				
				connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
			}
		}
};

module.exports.queryfire =queryfire;