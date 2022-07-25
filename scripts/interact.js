// 0xa213a5E767bD2F405fB4212436122cC6E6677C79

const { ethers } = require("hardhat")
const contract_address = "0xd67647ea2e0ae953e229391746bf29d7f8afabc0"
const sys_address = "0xf248ecb4211073c2ca45ec6dc4a68f9c75b47e4f"
const admin_address = "0xf248ecb4211073c2ca45ec6dc4a68f9c75b47e4f"
const ambassador_address = "0xCF63042D606D03330b5b83d91bb448bd40d81783"

async function main() {
    await admin_withdraw_all_funds()
    //const contract_address = "0xA2c5F24fF75b4b236c656d31f2042955D90b629e";
    //    const HelixProtocol = await ethers.getContractFactory("HelixProtocol")
    //   const hp = await HelixProtocol.attach(contract_address)

    //await hp.add_ambassador('0xCF63042D606D03330b5b83d91bb448bd40d81783');

    //var is_ambassador = await hp.is_ambassador('0xf248ecb4211073c2ca45ec6dc4a68f9c75b47e4f');
    //console.log("Is ambassador " +  is_ambassador.toString());
    // await hp.fund({ value: ethers.utils.parseEther("0.05") })
    //await hp.withdraw()
    //await hp.add_admin(admin_address);
    //var address  = await hp.getSystemAdmin();
    // console.log("Address is " + address.toString());
    // await hp.add_admin(sys_address);
    //await fund_me.fund({ value: ethers.utils.parseEther('0.05')});
    //await fund_me.withdraw();
    //await hp.setprotocol('Klaytn');
    //var name = await hp.getProtocolName();
    //await hp.fund({ value: ethers.utils.parseEther('0.05')});
    //console.log("Protocol name is  " + name.toString());

    /*
    var owner_address = await fund_me.getOwner();
    amount = await fund_me.getfundedAmount(owner_address);
    console.log("Ethereum value is " + amount.toString());
    console.log("Ethereum value is " + ethers.utils.formatUnits(amount.toString()))

    var owner_address = await fund_me.getOwner();
    console.log("Owner address is " + owner_address);

    var version = await fund_me.getVersion();
    console.log("Version is " + version.toString());

    var decimals = await fund_me.getDecimals();
    console.log("Decimals is " + decimals.toString());
*/
}

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

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
