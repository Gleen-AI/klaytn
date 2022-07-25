require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
const { API_URL, KLAYTN_URL, PRIVATE_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    defaultNetwork: "rinkeby_arbitrum",
    networks: {
        hardhat: {},
        rinkeby_arbitrum: {
            url: process.env.API_URL,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
        klaytn: {
            url: process.env.KLAYTN_URL || "",
            gasPrice: 250000000000,
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [process.env.PRIVATE_KEY]
                    : [],
        },
    },
}
