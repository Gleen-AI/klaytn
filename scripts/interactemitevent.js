// 0xa213a5E767bD2F405fB4212436122cC6E6677C79

const { ethers } = require("hardhat")
const contract_address = "0x610D1210A435FaF6A637316b1ed811112b176601"
const to_address = "0xCF63042D606D03330b5b83d91bb448bd40d81783"

async function main() {
    const em = await ethers.getContractFactory("EmitEventSmartContract")
    const em_i = await em.attach(contract_address)
    //await em_i.fund({ value: ethers.utils.parseEther("0.05") })
    await em_i.transferTo(to_address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
