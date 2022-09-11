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

    db.run("INSERT INTO users (id, first_name, last_name, email, balance) VALUES (1, 'Alex', 'Doe', 'alex@hotmail.com', 8903)"); 

    db.each("SELECT * FROM users", (err, row) => {
        console.log(row);
    });

    db.run(`CREATE TABLE IF NOT EXISTS nfts (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL,
        smartContractIndex INTEGER NOT NULL,
        owner_user_id INTEGER NOT NULL
    )`);

    db.run("DELETE FROM nfts"); 
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (1, 'Red Coat', 'Fashion Coat', 100, 0, 0)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (2, 'Blue Coat', 'Fashion Coat', 200, 1, 0)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (3, 'Green Coat', 'Fashion Coat', 300, 2, 0)");
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (4, 'Black Coat', 'Fashion Coat', 400, 3, 0)");
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (5, 'Dogs Cookies', 'Feed the dogs', 500, 4, 0)");
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (6, 'Skate', 'Become Tony Hawk', 3000, 5, 0)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (7, 'Eletric Bike', 'For lazy people', 5000, 6, 0)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (8, 'Shades', 'I'm Batman', 15000, 7, 0)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (9, 'Bulletproof Coat', 'Always prepared', 50000, 8, 0)"); 
    
    db.run("INSERT INTO nfts (id, title, description, price, smartContractIndex, owner_user_id) VALUES (10, 'Hekmet', 'Unlock 100% of Cerebral Actions', 100000, 9, 0)"); 

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