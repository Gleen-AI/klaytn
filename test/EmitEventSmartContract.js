const { expect } = require("chai")

describe("Token contract", function () {
    it("Verification of console log of hardhat", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners()

        const EmitEventSmartContract = await ethers.getContractFactory(
            "EmitEventSmartContract"
        )

        const emit_event_contract = await EmitEventSmartContract.deploy()
        await emit_event_contract.fund({
            value: ethers.utils.parseEther("0.05"),
        })
        await emit_event_contract.transferTo(addr1.address)
        // const ownerBalance = await hardhatToken.balanceOf(owner.address)
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
    })
})
