// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Suschainable { 

  struct NFT { 
    string title;
    string description;
    string owner;
  }

  NFT[] NFTs;

  constructor() public {
    NFTs.push(NFT("Red Coat", "A fashion coat", "null"));
    NFTs.push(NFT("Blue Coat", "A fashion coat", "null"));
    NFTs.push(NFT("Green Coat", "A fashion coat", "null"));
  }

  function changeOwner(string memory newOwner, uint nftIndex) public {
    NFTs[nftIndex].owner = newOwner;
  }
}
