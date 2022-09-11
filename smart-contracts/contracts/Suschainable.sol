// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Suschainable { 

  struct NFT { 
    string title;
    string description;
    string owner;
  }

  mapping(uint => NFT) public nfts;

  constructor() {
    nfts[0] = NFT("Red Coat", "A fashion coat", "null") ;
    nfts[1] = NFT("Blue Coat", "A fashion coat", "null");
    nfts[2] = NFT("Green Coat", "A fashion coat", "null");
    nfts[3] = NFT("Black Coat", "A fashion coat", "null");
    nfts[4] = NFT("Green Coat", "A fashion coat", "null");
    nfts[5] = NFT("Green Coat", "A fashion coat", "null");
    nfts[6] = NFT("Green Coat", "A fashion coat", "null");
    nfts[7] = NFT("Green Coat", "A fashion coat", "null");
    nfts[8] = NFT("Green Coat", "A fashion coat", "null");
    nfts[9] = NFT("Green Coat", "A fashion coat", "null");
  }

  function changeOwner(string memory newOwner, uint nftIndex) public {
    nfts[nftIndex].owner = newOwner;
  }
}
