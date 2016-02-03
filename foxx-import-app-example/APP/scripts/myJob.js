var Foxx = require('org/arangodb/foxx');
var doodads = applicationContext.dependencies.foxxExportsExample.doodads;
var doodadRepo = doodads.repo;
var console = require('console');

console.log('Running job...');


doodadRepo.hello();