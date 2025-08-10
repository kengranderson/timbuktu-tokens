require("dotenv").config();
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { Wallet, parseUnits } = require("ethers");
const { timbukTokenAddress, usdcTokenContractAddress } = require("../scripts/wallets");

console.log("📌 Running TimbukToken Test Script");

// Create wallets using private keys from .env
const provider = ethers.provider;
const customer1Wallet = new Wallet(process.env.CUSTOMERWALLET_1_PRIVATE_KEY, provider);
// const customer2Wallet = new Wallet(process.env.CUSTOMERWALLET_2_PRIVATE_KEY, provider);

// Test Suite for TimbukToken Transactions
describe("TimbukToken Transactions", function () {
    let timbukToken, usdcToken;

    beforeEach(async function () {
        const timbukTokenABI = require("../artifacts/contracts/TimbukToken.sol/TimbukToken.json").abi;
        timbukToken = new ethers.Contract(timbukTokenAddress, timbukTokenABI, provider);

        const ierc20ABI = require("@openzeppelin/contracts/build/contracts/IERC20.json").abi;
        usdcToken = new ethers.Contract(usdcTokenContractAddress, ierc20ABI, provider);
    });

    it("Should allow customer1 to approve and buy TimbukTokens", async function () {
        console.log("✅ Approving contract to spend USDC...");
        
        // Explicit approval transaction and waiting for confirmation
        const approvalTx = await usdcToken.connect(customer1Wallet).approve(timbukTokenAddress, parseUnits("1", 6));
        await approvalTx.wait(); // ✅ Ensures approval is mined
        
        console.log("✅ USDC Approval Confirmed!");
    
        console.log("🚀 Buying TimbukTokens with USDC...");
        const buyTx = await timbukToken.connect(customer1Wallet).buyTokens(
            80002,  // ✅ Polygon Amoy Testnet ID
            parseUnits("1", 6),
            "AFF123"
        );
    
        await buyTx.wait(); // ✅ Ensures purchase transaction is mined
        console.log("✅ TimbukTokens Purchased Successfully!");
    });
});
