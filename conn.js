var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "laracroft",
    password: "lara123",
    database: "any_project"
})

con.connect(function (err) {
    if(err) throw err
})

module.exports = con