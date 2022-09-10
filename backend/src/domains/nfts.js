export const listNfts = async (db) => {   

    const nfts = await new Promise(resolve => {
        db.serialize(() => {
            db.all("SELECT * FROM nfts", (err, rows) => {
                resolve(rows)
            });
        });
    });
    

    console.log(nfts);
    return nfts;
}