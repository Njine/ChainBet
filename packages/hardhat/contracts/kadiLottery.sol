// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract KadiLottery {
    IERC20 public token;
    address public admin;
    uint256 public ticketPrice;
    address[] public players;

    constructor(address _token, uint256 _ticketPrice) {
        token = IERC20(_token);
        ticketPrice = _ticketPrice;
        admin = msg.sender;
    }

    function buyTicket() external {
        require(token.transferFrom(msg.sender, address(this), ticketPrice), "Transfer failed");
        players.push(msg.sender);
    }

    function pickWinner() external onlyAdmin {
        require(players.length > 0, "No players in the lottery");
        uint256 winnerIndex = random() % players.length;
        address winner = players[winnerIndex];
        uint256 balance = token.balanceOf(address(this));
        require(token.transfer(winner, balance), "Transfer failed");
        players = new address[](0); // Reset players
    }

    function random() private view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players)));
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }
}
