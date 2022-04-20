const { accessListify } = require("ethers/lib/utils");

require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "3cfca9c7c1c144f3a6ea72ddbfbc022d"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai : {
      url : `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url : `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
