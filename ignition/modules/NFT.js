const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("NFTModule", (m) => {
  

  const contract = m.contract("NFT", [unlockTime], {
    value: lockedAmount,
  });

  return { contract };
});
