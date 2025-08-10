const { ethers } = require("hardhat");
const { formatEther, parseEther, parseUnits } = ethers;

async function main() {
  // Get signer (your wallet)
  const [deployer] = await ethers.getSigners();

  // Print wallet address
  console.log("✅ Deployer address:", deployer.address);

  // Get balance using provider
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("🔹 Wallet balance:", formatEther(balance), "MATIC");

  // Check if balance is sufficient
  if (balance < parseEther("0.01")) {  // Require at least 0.01 MATIC
    console.error("❌ Insufficient balance for gas fees.");
    process.exit(1);
  }

  // Define deployment parameters
  const tokenName = "MUSA Coin";
  const tokenSymbol = "$MUSACOIN";
  const amoyUsdcTokenContractAddress = "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582"; // 🔹 Polygon Amoy USDC contract address
  const affiliateWallet = "0x4A74DA6589fC671946dff11620A0e11C8aEddbca"; 
  const noaffiliateWallet = "0x936f87dd5599a4Af71083A89227c625EE9a60851";
  const developerWallet = "0x386fB8359210c8De19a1E3b3499a10ABF6bD120A"; 
  const projectWallet = "0x7b4121b730d8fF16fAd4fc0A9135be3eF800596C";
  const liquidityWallet = "0x66A95f7da70017D44BbcBE533384440b2cd3825C";
  const affiliatePercentage = 20;
  const developerPercentage = 5;
  const projectPercentage = 50;
  const liquidityPercentage = 25;

  // Specify EIP-1559 gas price options
  const maxFeePerGas = parseUnits('50', 'gwei');  // Max fee willing to pay (adjust if needed)
  const maxPriorityFeePerGas = parseUnits('30', 'gwei');  // Tip for miners (adjust if needed)

  // Get contract factory
  const TimbukToken = await ethers.getContractFactory("TimbukToken");
  console.log("🚀 Deploying TimbukToken contract...");

  // Deploy contract with constructor arguments
  const contract = await TimbukToken.deploy(
    tokenName,
    tokenSymbol,
    amoyUsdcTokenContractAddress,
    affiliateWallet,
    noaffiliateWallet,
    developerWallet,
    projectWallet,
    liquidityWallet,
    affiliatePercentage,
    developerPercentage,
    projectPercentage,
    liquidityPercentage,
    {
      maxFeePerGas: maxFeePerGas,
      maxPriorityFeePerGas: maxPriorityFeePerGas
    }
  ).catch(err => {
    console.error("❌ Deployment error:", err);
    process.exit(1);
  });

  if (!contract) {
    throw new Error("❌ Deployment failed: Contract instance is undefined");
  }

  // Wait for the contract to be mined
  const deployedContract = await contract.waitForDeployment().catch(err => {
    console.error("❌ Deployment error:", err);
    process.exit(1);
  });

  const deployedAddress = await deployedContract.getAddress();
  console.log("✅ TimbukToken deployed to:", deployedAddress);

  // // 🔹 Optional: Set bridge contract if needed
  // const bridgeContractAddress = "0x..."; // Replace with actual bridge address if applicable
  // if (bridgeContractAddress !== "0x...") {
  //   const tx = await contract.updateBridgeContract(bridgeContractAddress);
  //   await tx.wait();
  //   console.log("Bridge contract set to:", bridgeContractAddress);
  // }

  // console.log("Deployment completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
