import sqlite3 from 'sqlite3';  

const db = new sqlite3.Database('../db/suschainable.db',  (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        balance INTEGER NOT NULL
    )`); 

    // db.run("INSERT INTO users (id, first_name, last_name, email, balance) VALUES (1, 'Alex', 'Doe', 'alex@hotmail.com', 0)"); 

    db.each("SELECT * FROM users", (err, row) => {
        console.log(row);
    });

    db.run(`CREATE TABLE IF NOT EXISTS nfts (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL
    )`);

    db.run("DELETE FROM nfts"); 
    
    db.run("INSERT INTO nfts (id, title, description, price) VALUES (1, 'Red Coat', 'Fashion Coat', 100)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price) VALUES (2, 'Blue Coat', 'Fashion Coat', 200)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price) VALUES (3, 'Green Coat', 'Fashion Coat', 300)"); 

    db.each("SELECT * FROM nfts", (err, row) => {
        console.log(row);
    });
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});