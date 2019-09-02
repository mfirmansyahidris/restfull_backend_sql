'use strict'

var response = require('./res')
var connection = require('./conn')

exports.users = function(req, res){
    connection.query('SELECT * FROM person', function (error, rows, fields) {
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}

exports.index = function(req, res){
    response.ok("Hello from the node JS RESTfull side!", res)
}

exports.insert = function(req, res){
    connection.query(`INSERT INTO person (first_name, last_name) VALUE ('${req.body.first_name}', '${req.body.last_name}')`,
        function(error, rows, fields){
            if(error){
                console.log(error)
                response.failed(error, res)
            }else{
                response.ok("success", res)
            }
        }
    )
}