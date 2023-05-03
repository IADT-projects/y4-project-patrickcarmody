const Crowdfunding = artifacts.require("Crowdfunding");
const { expectRevert } = require('@openzeppelin/test-helpers');


contract("Crowdfunding", (accounts) => {
    const [controller, contributor] = accounts;
    let crowdfunding;
  
    beforeEach(async () => {
      crowdfunding = await Crowdfunding.new({ from: controller });
    });
    it("should allow regular user to deposit ether", async () => {
        const depositAmount = web3.utils.toWei("0.5", "ether");
        await crowdfunding.deposit({ from: contributor, value: depositAmount });
        const totalDeposits = await crowdfunding.getTotalDeposits();
        const contribution = await crowdfunding.getContribution(contributor);
        assert.equal(totalDeposits, depositAmount, "Total deposits should be equal to deposit amount");
        assert.equal(contribution, depositAmount, "Contributor's contribution should be equal to deposit amount");
      });
      
      it("should allow controller to withdraw ether", async () => {
        const depositAmount = web3.utils.toWei("0.5", "ether");
        await crowdfunding.deposit({ from: controller, value: depositAmount });
        const balanceBeforeWithdrawal = web3.utils.toBN(await web3.eth.getBalance(crowdfunding.address));
        await crowdfunding.withdraw({ from: controller });
        const balanceAfterWithdrawal = web3.utils.toBN(await web3.eth.getBalance(crowdfunding.address));
        assert(balanceAfterWithdrawal.isZero(), "Contract balance should be zero after withdrawal");
        assert(balanceBeforeWithdrawal.gt(balanceAfterWithdrawal), "Contract balance should decrease after withdrawal");
      });
      
      it("should not allow regular user to withdraw ether", async () => {
        await crowdfunding.deposit({ from: contributor, value: web3.utils.toWei("1", "ether") });
        await expectRevert(crowdfunding.withdraw({ from: contributor }), "Only the controller can withdraw funds");
      });
  });