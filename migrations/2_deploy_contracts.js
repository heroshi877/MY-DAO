var DaosFactory = artifacts.require("./DaosFactory.sol");
var MembershipModule = artifacts.require("./MembershipModule.sol");

module.exports = function(deployer) {
  deployer.deploy(DaosFactory);
};
