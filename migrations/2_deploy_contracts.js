const tPay = artifacts.require("./tPay.sol");

module.exports = async (deployer) => {
  await deployer.deploy(tPay, { gas: 5000000 });
};
