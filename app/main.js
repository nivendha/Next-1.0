/*NEXT: main.JS*/

/*var nx=require('require-namespace');
nx.createSync(__dirname + '/app/core', 'core');

var test=nx.core.compRegistry;

console.log("testing:"+test());*/

var nx=require('require-namespace');
nx.createSync(__dirname + '/core', 'core');



module.exports = nx.core;