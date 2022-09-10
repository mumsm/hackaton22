import { getUser, updateUserBalance } from './users.js';
import { buyNftTransaction, retrieveNftsFromSmartContract } from '../blockchain/blockchain.js';

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

export const buyNft = async (db, requestObject) => {   

    const { userid, nftid } = requestObject;

    const nft = await getNft(db, nftid);
    const user = await getUser(db, userid);

    if (Number(user.balance) < Number(nft.price)) {
        return 'not_enough_funds'; 
    }

    if (await buyNftTransaction(user.id, nft.smartContractIndex)) {

        const newBalance = Number(user.balance) - Number(nft.price);

        updateUserBalance(db, user.id, newBalance);
        
        updateNftOwnerInDb(db, user.id, nft.id);

        return 'ok';
    }
    
    return 'blockchain_transaction_error';
}

export const displayNftsFromSmartContract = async () => {   
    return await retrieveNftsFromSmartContract();
}

export const getInventory = async (db, requestObject) => {
    const { userid } = requestObject;

    return new Promise(resolve => {
        db.serialize(() => {
            db.all(`SELECT * FROM nfts WHERE owner_user_id = ${userid}`, (err, rows) => {
                resolve(rows);
            });
        });
    });
}

const getNft = (db, nftId) => {
    return new Promise(resolve => {
        db.serialize(() => {
            db.all(`SELECT * FROM nfts WHERE id = ${nftId}`, (err, rows) => {
                resolve(rows[0])
            });
        });
    });
}

export const updateNftOwnerInDb = (db, userId, nftId) => {
    db.run(`UPDATE nfts SET owner_user_id = ${userId} WHERE id = ${nftId}`);
}