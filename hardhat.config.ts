import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ethers";
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999,
      },
    },
  },
  networks: {
    hardhat: {
    },
    testnet: {
      url: `https://opbnb-testnet-rpc.bnbchain.org`, // https://opbnb-testnet-rpc.bnbchain.org
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 3500000,
    },
    mainnet: {
      url: `https://opbnb-mainnet-rpc.bnbchain.org`,
      accounts: [process.env.PRIVATE_KEY as string]
    }
  },
  etherscan: {
    apiKey: "XVG5U35MR4GNR1SHFIWZ5SBJDAERUG7K23",

    customChains: [
      {
        network: "opbnb",
        chainId: 5611, // Replace with the correct chainId for the "opbnb" network
        urls: {
          apiURL:
            "https://open-platform.nodereal.io/64a9df0874fb4a93b9d0a3849de012d3/op-bnb-testnet/contract/",
          browserURL: "https://testnet.opbnbscan.com/",
        },
      },
    ],
  },
  sourcify: {
    enabled: false
  }
};

export default config;
