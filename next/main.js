/*NEXT: main.JS*/

/*var nx=require('require-namespace');
nx.createSync(__dirname + '/app/core', 'core');

var test=nx.core.compRegistry;

console.log("testing:"+test());*/




module.exports = function(nx){
nx.createSync(__dirname + '/core', 'core');
nx.createSync(__dirname + '/layout', 'layout');

var layoutTemp= require('./layout/loginLayout.js')();



 return layoutTemp;
};