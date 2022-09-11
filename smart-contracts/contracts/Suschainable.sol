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
    nfts[4] = NFT("Dogs Cookies", "Feed the dogs", "null");
    nfts[5] = NFT("Skate", "Become Tony Hawk", "null");
    nfts[6] = NFT("Eletric Bike", "For lazy people", "null");
    nfts[7] = NFT("Shades", "Im Batman", "null");
    nfts[8] = NFT("Bulletproof Coat", "Always prepared", "null");
    nfts[9] = NFT("Helmet", "Unlock 100% of Cerebral Actions", "null");
  }

  function changeOwner(string memory newOwner, uint nftIndex) public {
    nfts[nftIndex].owner = newOwner;
  }
}
