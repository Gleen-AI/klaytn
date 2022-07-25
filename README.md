# HelixProtocol for Klaytn L1

This project contains all the smart contract code for HelixProtocol for the deployment on Klaytn blockchain.

Try running some of the following tasks:

```shell
yarn hardhat help
yarn hardhat test
GAS_REPORT=true npx hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.js
```

Testing Scenarios
```
async function fund_the_contract() {
    const HelixProtocol = await ethers.getContractFactory("HelixProtocol")
    const hp = await HelixProtocol.attach(contract_address)
    await hp.fund({ value: ethers.utils.parseEther("0.05") })
}

async function add_admin() {
    const HelixProtocol = await ethers.getContractFactory("HelixProtocol")
    const hp = await HelixProtocol.attach(contract_address)
    await hp.add_admin(admin_address)
}

async function admin_withdraw_all_funds() {
    const HelixProtocol = await ethers.getContractFactory("HelixProtocol")
    const hp = await HelixProtocol.attach(contract_address)
    await hp.withdraw()
}

```
