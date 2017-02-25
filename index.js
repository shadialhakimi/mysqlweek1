var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({

    "host"      : "hyf-mysql.jasongwartz.com",

    "user"      : "student",

    "password"  : "h9VV3@PVdZqV.9FwAx2xvnUQ",

    "port"      : 5824,

    "database"  : "class6"

});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

/*Find out how many todo items are on the list*/
con.query('SELECT count(*) FROM todos',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});


/*•Find all the todo items that are marked as done*/
con.query('select * from todos where Done=1',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});


/*•Find all the todo items that are not marked as done*/
con.query('select * from todos where done is not true',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

/*•Get all the todo items, sorted with the most recent first*/
con.query('select * from todos order by id desc',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

/*•Get the single most recently added todo item*/
con.query('select * from todos order by id desc limit 1',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

/*•Get all todo items about 'databases'*/
con.query("select * from todos where name like '%databases%'",function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});



con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

