require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      // url: process.env.INFURA_GOERLI_ENDPOINT,
      // accounts: [process.env.PRIVATE_KEY],
      url: "https://goerli.infura.io/v3/b3c2334a31d145638be624f3470c960c",
      accounts: [
        "02d312198ea4d3fc05d9eff7be537ab5d141c8c6fd841cdd791bb4cfc710b8c4",
      ],
    },
  },
};
