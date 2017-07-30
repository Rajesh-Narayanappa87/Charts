var mysql = require('mysql');

var connection = mysql.createConnection({
	  host:'mysql3.gear.host',
	  user:'rajtest1',
	  password:'Ua0uIB8?bC8-',
	  database :'rajtest1'
	});

connection.connect();
var insert = "INSERT INTO summary set "

connection.query('Select * from summary', function (error, rows, fields) {
	  if (error) throw error;
//	  console.log('The solution is: ', results);
	  var objToJson = rows;
	  console.log(objToJson);
//	    var response = rows;
//	    response.json(rows);
//	    console.log(response);
//	  response.json(rows);
	});