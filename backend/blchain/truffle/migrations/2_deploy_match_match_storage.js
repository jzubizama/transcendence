const MatchStorage = artifacts.require("MatchStorage");

module.exports = function (deployer) {
  deployer.deploy(MatchStorage);
};
