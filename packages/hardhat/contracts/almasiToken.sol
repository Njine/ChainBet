// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract AlmasiToken is ERC20 {
    address public admin;
    uint256 public fee = 35; // 3.5% administrative fee

    constructor() ERC20("Kadi Token", "KADI") {
        admin = msg.sender;
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function transferWithFee(address recipient, uint256 amount) external {
        uint256 feeAmount = (amount * fee) / 1000;
        _transfer(msg.sender, recipient, amount - feeAmount);
        _transfer(msg.sender, admin, feeAmount);
    }
}
