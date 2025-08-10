require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          viaIR: true,  // ✅ Enables IR-based compilation to avoid stack too deep
        },
      }
    ]
  },
  sourcify: {
    enabled: true
  },
  networks: {
    // ✅ Base networks (primary focus for hackathon)
    base: {
      url: `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ALCHEMY_PRIVATE_KEY}`]
    },
    baseSepolia: {
      url: `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ALCHEMY_PRIVATE_KEY}`]
    },
    // ✅ Existing Polygon networks (for future expansion)
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ALCHEMY_PRIVATE_KEY}`]
    },
    ethereum: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ALCHEMY_PRIVATE_KEY}`]
    },
    amoy: {
      url: `https://polygon-amoy.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ALCHEMY_PRIVATE_KEY}`]
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ALCHEMY_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      key: process.env.ETHERSCAN_API_KEY,
      polygonAmoy: process.env.POLYGONSCAN_API_KEY
    }
  }
};
