require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
   goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/6Mc1ezS0K7qsfcBAtFPyY4fjbuqTWMLp",
      accounts: ["b23c0024dfdb0962bea301d8883ead084db11d294481cc6389157cb8f3316fa3"],
    }
  }
};
