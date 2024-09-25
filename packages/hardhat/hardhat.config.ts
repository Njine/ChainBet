import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
//import "@nomiclabs/hardhat-etherscan";

const infuraApiKey = process.env.INFURA_API_KEY;
const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

if (!infuraApiKey || !deployerPrivateKey || !etherscanApiKey) {
  throw new Error("Please set INFURA_API_KEY, DEPLOYER_PRIVATE_KEY, and ETHERSCAN_API_KEY in your .env file");
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "localhost",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraApiKey}`,
      accounts: [deployerPrivateKey],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraApiKey}`,
      accounts: [deployerPrivateKey],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraApiKey}`,
      accounts: [deployerPrivateKey],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraApiKey}`,
      accounts: [deployerPrivateKey],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraApiKey}`,
      accounts: [deployerPrivateKey],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraApiKey}`,
      accounts: [deployerPrivateKey],
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  },
};

export default config;
