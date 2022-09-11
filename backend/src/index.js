import http from 'http';
import url from 'url';
import sqlite3 from 'sqlite3';  
import { listUsers, getBalance, increaseUserBalance } from './domains/users.js'
import { listNfts, getInventory } from './domains/nfts.js'
import { buyNft, displayNftsFromSmartContract } from './domains/nfts.js'

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

    if (queryObject.endpoint === 'listUsers') {
        response = await listUsers(db);
    }

    if (queryObject.endpoint === 'listNfts') {
        response = await listNfts(db);
    }

    if (queryObject.endpoint === 'buyNft') {
        response = await buyNft(db, queryObject);
    }

    if (queryObject.endpoint === 'displayNftsFromSmartContract') {
        response = await displayNftsFromSmartContract();
    }

    if (queryObject.endpoint === 'getBalance') {
        response = await getBalance(db, queryObject);
    }

    if (queryObject.endpoint === 'getInventory') {
        response = await getInventory(db, queryObject);
    }

    if (queryObject.endpoint === 'increaseUserBalance') {
        response = await increaseUserBalance(db, queryObject);
    }
 
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.writeHead(200);

    res.end(JSON.stringify(response));
}

const server = http.createServer(requestListener);

server.listen(8080);
 
process.on('SIGINT', () => {    
    db.close((err) => {
        if (err) {
            process.exit();
            return console.error(err.message);
        }
        console.log('Close the database connection.');
        process.exit();
    });

});