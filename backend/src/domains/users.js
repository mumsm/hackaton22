export const listUsers = async (db) => {

    const users = await new Promise(resolve => {
        db.serialize(() => {
            db.all("SELECT * FROM users", (err, rows) => {
                resolve(rows)
            });
        });
    });
    
    console.log(users);

    return users;
}

export const getBalance = async (db, requestObject) => {
    const { userid } = requestObject;

    const user = await getUser(db, userid);
    
    return user.balance;
}

export const getUser = (db, userId) => {
    return new Promise(resolve => {
        db.serialize(() => {
            db.all(`SELECT * FROM users WHERE id = ${userId}`, (err, rows) => {
                resolve(rows[0])
            });
        });
    });
}

export const updateUserBalance = (db, userId, newBalance) => {
    db.run(`UPDATE users SET balance = ${newBalance} WHERE id = ${userId}`);
}