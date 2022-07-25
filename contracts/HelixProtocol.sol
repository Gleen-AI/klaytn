// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract HelixProtocol {
    string protocol_name;
    address private immutable sys_admin;
    address private admin;

    struct Ambassador {
        address wallet_address;
        uint256 current_balance;
        bool has_been_added_to_system;
        bool is_banned;
    }

    address[] public all_ambassadors;

    mapping(address => Ambassador) public ambassador_mapping;

    function setprotocol(string memory _protocol_name) public {
        protocol_name = _protocol_name;
    }

    constructor() {
        sys_admin = msg.sender;
    }

    function add_admin(address admin_account) public onlySystemAdmins {
        admin = admin_account;
    }

    function getProtocolName() public view returns (string memory) {
        return protocol_name;
    }

    function getSystemAdmin() public view returns (address) {
        return sys_admin;
    }

    function fund() public payable {}

    function withdraw() public onlyAdmin {
        payable(msg.sender).transfer(address(this).balance);
    }

    function add_ambassador_rewards(
        uint256 additional_rewards,
        address ambassador_address
    ) public onlyAdmin {
        ambassador_mapping[ambassador_address].current_balance =
            ambassador_mapping[ambassador_address].current_balance +
            additional_rewards;
    }

    function add_ambassador(address ambassador_wallet_address)
        public
        onlyAdmin
    {
        if (
            ambassador_mapping[ambassador_wallet_address]
                .has_been_added_to_system
        ) {
            return;
        }
        ambassador_mapping[ambassador_wallet_address] = Ambassador(
            ambassador_wallet_address,
            0,
            true, // has_been_added
            false // is_banned,
        );
        all_ambassadors.push(ambassador_wallet_address);
    }

    function is_ambassador(address ambassador_wallet_address)
        public
        view
        returns (bool)
    {
        if (
            ambassador_mapping[ambassador_wallet_address]
                .has_been_added_to_system
        ) {
            return true;
        } else {
            return false;
        }
    }

    function remove_ambassador(address ambassador_wallet_address)
        public
        onlyAdmin
    {
        if (
            ambassador_mapping[ambassador_wallet_address]
                .has_been_added_to_system
        ) {
            delete ambassador_mapping[ambassador_wallet_address];
        }
    }

    function ban_ambassador() public onlyAdmin {}

    function ambassador_withdraw_fund() public isActiveAdmin {
        // ambassador can withdraw the fund
        payable(msg.sender).transfer(
            ambassador_mapping[msg.sender].current_balance
        );
        ambassador_mapping[msg.sender].current_balance = 0;
    }

    function add_staking_balance() public onlyAdmin {}

    function withdraw_staking_balance() public onlyAdmin {}

    modifier onlySystemAdmins() {
        require(sys_admin == msg.sender, "Not a system_admin");
        _;
    }

    modifier onlyAdmin() {
        require(admin == msg.sender, "Not an Admin");
        _;
    }

    modifier isActiveAdmin() {
        require(
            ambassador_mapping[msg.sender].is_banned == false,
            "Ambassador is banned"
        );
        _;
    }
}
