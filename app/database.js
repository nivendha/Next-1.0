var pg = require('pg');

var databaseUrl = (process.env.PG_url || 'pg://shavez.hameed:@localhost:5432/shavez.hameed');