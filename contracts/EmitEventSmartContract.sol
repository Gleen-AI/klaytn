// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;
import "hardhat/console.sol";

contract EmitEventSmartContract {
    constructor() {}

    function fund() public payable {}

    event Deposit(address indexed _from, uint256 etherAmount, uint256 ts);

    function transferTo(address to_address) public {
        console.log(
            "Transferring from %s to %s %s tokens",
            msg.sender,
            to_address,
            address(this).balance
        );
        emit Deposit(msg.sender, address(this).balance, block.timestamp);
        payable(to_address).transfer(address(this).balance);
    }
    /*
    function() public payable {
        console.log("This is the default function call")
    }*/
}
