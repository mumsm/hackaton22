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