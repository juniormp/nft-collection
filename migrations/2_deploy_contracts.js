const CryptoDevs = artifacts.require("CryptoDevs");

module.exports = function(deployer) {
  const baseURI = "nft-collection-sneh1999.vercel.app/api";
  const whitelistAddress = "0xac134b5f2C48BFBC78ECc4CBF96D46D235CC397E";
  
  deployer.deploy(CryptoDevs, baseURI, whitelistAddress);
};
