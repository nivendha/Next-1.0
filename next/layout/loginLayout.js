/*
var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.compile('<%= people.join(", "); %>', {people: people});*/
var fs = require('fs');
var ejs = require('ejs');
var compiled = ejs.compile(fs.readFileSync('./next/resources/materialize/templates/login.nxt', 'utf8'));
//var html = compiled({ title : 'EJS', text : 'Hello, World!' });

//console.log(html);
function getLoginComponent(){
				var html=compiled();
				return html;
			}

module.exports = function() {

return getLoginComponent;
}