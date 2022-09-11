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
    nfts[0] = NFT("Knee Pad", "Legs protection", "null") ;
    nfts[1] = NFT("Gloves", "Hands protection", "null");
    nfts[2] = NFT("Rollerblades", "Roll over Bethoven", "null");
    nfts[3] = NFT("Scooter", "For extra lazy people", "null");
    nfts[4] = NFT("Dogs Cookies", "Feed the dogs", "null");
    nfts[5] = NFT("Skate", "Become Tony Hawk", "null");
    nfts[6] = NFT("Electric Bike", "For lazy people", "null");
    nfts[7] = NFT("Shades", "I am Batman", "null");
    nfts[8] = NFT("Bulletproof Coat", "Always prepared", "null");
    nfts[9] = NFT("Helmet", "Unlock 100% of Cerebral Actions", "null");
  }

  function changeOwner(string memory newOwner, uint nftIndex) public {
    nfts[nftIndex].owner = newOwner;
  }
}
