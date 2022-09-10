import Web3 from 'web3';
import { contractInfo } from './contracts/suschainableContract.js';
import ethers from 'ethers'; 

let mnemonic = "belt width follow leisure lounge obtain unaware liar tilt monitor foil motor";
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);

const privateKey = mnemonicWallet.privateKey; 

const account = '0xbfC565D51379F170a19893D57Ffede8c23F8894e';
 
const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

const contractAddress = contractInfo.networks[80001].address;

const contract = new web3.eth.Contract(contractInfo.abi, contractAddress); 

export async function buyNftTransaction(newOwner, smartContractIndex) {
    return new Promise(async resolve => {
        let transaction = contract.methods.changeOwner(String(newOwner), smartContractIndex);
        let encoded_tx = transaction.encodeABI();
        let transactionObject = {
            gas: await transaction.estimateGas({from: account}),
            data: encoded_tx,
            from: account,
            to: contractAddress
        };
        console.log(transactionObject);

        web3.eth.accounts.signTransaction(transactionObject, privateKey, function (error, signedTx) {
            if (error) {
                console.log(error); 
                resolve(false);
            } else {
                web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', function (receipt) {
                    console.log(receipt);
                    resolve(true);
                } );  
            }
        });
    });
} 

export async function retrieveNftsFromSmartContract() {
    const nft1 = await contract.methods.nfts(0).call();
    const nft2 = await contract.methods.nfts(2).call();
    const nft3 = await contract.methods.nfts(3).call();

    return [nft1, nft2, nft3];
}
 

// await sendTransaction();