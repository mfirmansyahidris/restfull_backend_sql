'use strict'

exports.ok = function(value, res){
    var data = {
        'status' : 200,
        'values' : value
    }
    res.json(data)
    res.end()
}

exports.failed = function(value, res){
    var data = {
        'status' : 500,
        'value' : value
    }
    res.json(data)
    res.end
}