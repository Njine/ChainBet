// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AlmasiNFT is ERC721 {
    uint256 public tokenCount;
    
    constructor() ERC721("almasi NFT", "almasiNFT") {}

    function mint(address to) external {
        tokenCount++;
        _mint(to, tokenCount);
    }
}