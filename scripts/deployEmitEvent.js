// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")

async function main() {
    const emit_event = await hre.ethers.getContractFactory(
        "EmitEventSmartContract"
    )
    const em = await emit_event.deploy()
    await em.deployed()
    console.log("EmitEventSmartContract deployed to:", em.address)

    // run the code for testing
    const to_address = "0xF248eCB4211073C2CA45eC6dC4A68f9c75B47e4f"
    await em.fund({ value: ethers.utils.parseEther("0.05") })
    await em.transferTo(to_address)
}

async function verify(contractAddress, args) {}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
