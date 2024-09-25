// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract KadiBet {
    struct Player {
        address playerAddress;
        uint256 betAmount;
    }

    mapping(address => Player) public players;
    address[] public playerAddresses;
    uint256 public totalBetAmount;

    // Bet function
    function placeBet() public payable {
        require(msg.value > 0, "Place a valid bet.");
        players[msg.sender] = Player(msg.sender, msg.value);
        playerAddresses.push(msg.sender);
        totalBetAmount += msg.value;
    }

    // Logic to determine the winner and distribute funds
    function determineWinner(address winner) public {
        require(players[winner].playerAddress != address(0), "Invalid winner.");
        // Winner receives the entire bet amount
        payable(winner).transfer(totalBetAmount);
        totalBetAmount = 0;
    }
}
