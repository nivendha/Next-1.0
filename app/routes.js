var DB = require('./database.js');
var Cookies = require("cookies");
var fs = require("fs");
var httprequest = require('request');
var ejs = require('ejs');

// ENDPOINTS for Views:
var RV_LOGIN = '/login',
RV_DASHBOARD = '/my-account';

module.exports = function(app,main) {
	var m=main;
	app.get('/', function(request, response){
	var cookies = new Cookies(request, response);
		if (cookies.get('uuid') && cookies.get('token')) {
			response.redirect(RV_LOGIN);
		} else {
			//var t=main.getLoginComponent();
			response.render('login.html');
		}
	});

	app.get(RV_LOGIN, function(request, response){
		var cookies = new Cookies(request, response);
		if (cookies.get('uuid') && cookies.get('token')) {
			response.render('login.html');
		} else {
			response.render('login.html');
		}
	});

	app.get(RV_DASHBOARD, function(request, response){
		/*var cookies = new Cookies(request, response);
		request.query.uuid = cookies.get("uuid");
		request.query.token = cookies.get("token");
		DB.readDashboard(request.query, function(err, rows){
			if(!handleError(__lineNumber, err, response)) return;
			var k = '';
			k = JSON.stringify(rows);
			response.render('dashboard', {
					str_loans: k,
					applied_loans: rows,
					test: "Data"
			});
		});*/
		response.render('dashboard.html');
	});
};

function responseWith(response, s, m, d){
	response.send({
		meta: {
			status: s,
			message: m
		},
		data: d
	});
}

function handleError(linenum, err, response){
    if(err){
        console.log("routes.js: Error on line number " + linenum + ", object : %j", err);
        if (response) {
					response.status(500).send({
						meta: {
							status: 0,
							message: "Internal server error"
						}
					});
        }
        return false;
    }
    return true;
}
