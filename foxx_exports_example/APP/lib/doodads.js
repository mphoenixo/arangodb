'use strict';
var Foxx = require('org/arangodb/foxx');
var Joi = require('joi');
var console = require('console');

var MyRepository =  Foxx.Repository.extend({
    
    hello : function() {
   
        console.log('Hello!');
    }
});
exports.repo = new MyRepository();
