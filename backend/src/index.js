import http from 'http';
import url from 'url';
import sqlite3 from 'sqlite3';  
import { listUsers } from './domains/users.js'
import { listNfts } from './domains/nfts.js'

const db = new sqlite3.Database('./persistence/db/suschainable.db',  (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});


const requestListener = async function (req, res) {
    const queryObject = url.parse(req.url, true).query;

    console.log('Requesting', queryObject);
    
    let response;

    if (queryObject.endpoint === 'users') {
        response = await listUsers(db);
    }

    if (queryObject.endpoint === 'nfts') {
        response = await listNfts(db);
    }
 
    res.writeHead(200);
    res.end(JSON.stringify(response));
}

const server = http.createServer(requestListener);

server.listen(8080);

 