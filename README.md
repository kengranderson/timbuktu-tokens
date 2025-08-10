# Timbuktu Token Platform

## Overview

Timbuktu Token Platform is a platform token contract designed to serve multiple projects on the Base network. The platform is owned and operated by BlackFacts.com LLC, which issues tokens for individual projects run by project owners, who serve token owners (end users) through affiliate marketing.

**Public Platform Website**: The platform provides a public-facing user interface at [timbuktu.app](https://timbuktu.app) where:
- Projects are created and managed
- Affiliates can sign up and get approved
- Token owners can discover and purchase tokens
- Project owners can manage their affiliate programs
- All platform activities are transparent and accessible

**Payment Methods**: 
- **Fiat Purchases**: Token owners can purchase tokens using fiat currency through Coinbase Onramp integration (converts to USDC)
- **USDC Donations**: Existing USDC holders can directly donate to projects
- **Platform Technology**: The website is implemented using WordPress, providing a familiar and robust content management system for all stakeholders

**Contract Versioning**: The platform supports seamless token upgrades through versioned contracts:
- Each contract has a version number for tracking upgrades
- Tokens are linked to the contract version that minted them
- Contract owners can upgrade tokens to newer versions by paying USDC
- Upgrade fees support platform development and maintenance
- Only one version of tokens circulates at any time per project

## 🏗️ Platform Architecture

### Platform Structure

| **Platform Layer** | **Description** | **Features** |
|---|---|---|
| **Timbuktu Token Platform** | (Platform Owner) | • Platform management<br>• Contract oversight<br>• System administration |
| **Timbuktu Token Platform Contract** | (Base Network) | • Versioned Contract System<br>• Seamless Token Upgrades<br>• Smart contract operations |
| **timbuktu.app** | (Public Website - WordPress) | • Project Creation<br>• Affiliate Signup<br>• Token Discovery<br>• Affiliate Management<br>• Coinbase Onramp Integration<br>• Token Upgrade Interface |

### Project Distribution

| **Project A** | **Project B** | **Project C** | **Project D** |
|---|---|---|---|
| (Contract Owner A) | (Contract Owner B) | (Contract Owner C) | (Contract Owner D) |
| • Token Upgrades | • Token Upgrades | • Token Upgrades | • Token Upgrades |

### Token Owner Activities

| **Token Owners** | **Token Owners** | **Token Owners** | **Token Owners** |
|---|---|---|---|
| (End Users) | (End Users) | (End Users) | (End Users) |
| • Fiat→USDC | • Fiat→USDC | • Fiat→USDC | • Fiat→USDC |
| • USDC Donate | • USDC Donate | • USDC Donate | • USDC Donate |

### Complete Stakeholder Ecosystem

| **Stakeholder** | **Role** | **Responsibilities** |
|---|---|---|
| **Timbuktu Token Platform** | (Platform Owner) | • Manages platform operations<br>• Controls mint/burn functions<br>• Supports project owners<br>• Controls ownership transfers |
| **timbuktu.app** | (Public Website - WordPress) | • Project creation and management<br>• Affiliate signup and approval<br>• Token discovery and purchase<br>• Transparent platform activities<br>• Coinbase Onramp integration<br>• Fiat-to-USDC conversion |
| **Project Owners** | (Contract Owners) | • Control their specific token contract<br>• Manage project-specific settings<br>• Serve their token owners<br>• Control no-affiliate wallet<br>• Manage project affiliates (add/remove) |
| **Token Owners** | (End Users) | • Purchase and hold tokens<br>• Use tokens for project services<br>• Participate in project ecosystem<br>• Provide USDC for token purchases<br>• Use fiat currency via Coinbase Onramp<br>• Donate existing USDC to projects |
| **Affiliates** | Marketing Partners | • Marketing partners<br>• Earn commissions on token sales<br>• Promote projects to token owners<br>• Receive USDC rewards<br>• Sign up and get approved by contract<br>• Each affiliate has unique code/wallet |
| **Development Team** | Platform Developers | • Platform development and maintenance<br>• Smart contract development<br>• Technical support and operations<br>• Receive USDC funding |
| **Project Treasury** | Project Funding | • Project-specific funding<br>• Project operations and maintenance<br>• Project development and growth<br>• Receive USDC funding |
| **Liquidity Pool** | Market Liquidity | • Market liquidity management<br>• Token price stability<br>• Trading pair maintenance<br>• Receive USDC funding |
| **No-Affiliate Wallet** | Fallback System | • Default destination for invalid codes<br>• Fallback for affiliate system<br>• Controlled by contract owner<br>• Receive USDC when no valid affiliate<br>• Receives affiliate commissions when affiliate codes are invalid/missing |

## 📚 Complete Glossary

### Platform Level
- **Timbuktu Token Platform**: The organization that owns and controls the smart contract
- **Platform Owners**: The people/entity that control the Timbuktu Token Platform
- **Platform Contract**: The TimbukToken.sol contract that issues tokens
- **Public Website**: timbuktu.app - WordPress-based platform interface for all stakeholders

### Platform Interface
- **timbuktu.app**: Public-facing website where all platform activities occur
- **WordPress Implementation**: Familiar content management system for easy updates and management
- **Project Creation**: Contract owners can create and manage their projects
- **Affiliate Signup**: Affiliates can register and apply for approval
- **Token Discovery**: Token owners can browse and purchase tokens
- **Affiliate Management**: Contract owners can approve and manage affiliates
- **Transparency Portal**: All platform activities are publicly visible

### Payment Methods
- **Coinbase Onramp**: Fiat-to-USDC conversion for token purchases
- **Fiat Purchases**: Token owners can use traditional currency (USD, EUR, etc.) to buy tokens
- **USDC Donations**: Existing USDC holders can directly donate to projects
- **Automatic Conversion**: Fiat payments are automatically converted to USDC through Coinbase Onramp
- **Multiple Payment Options**: Credit cards, bank transfers, and other fiat payment methods supported

### Contract Versioning
- **Version Number**: Each contract has a version number for tracking upgrades
- **Token Version Linking**: Tokens are linked to the contract version that minted them
- **Seamless Upgrades**: Contract owners can upgrade tokens to newer versions by paying USDC
- **Upgrade Fee**: USDC payment required for token upgrades (supports platform development)
- **Version Tracking**: All token operations include version information for transparency
- **Backward Compatibility**: Old tokens remain functional while new versions are available
- **Single Version**: Only one version of tokens circulates at any time per project

### Project Level
- **Contract Owners**: Individual project/token owners who have control over their specific token contract
- **Project Owners**: The same as contract owners - they run their specific projects
- **Project Tokens**: Tokens issued by the platform contract for specific projects

### User Level
- **Token Owners**: End users who purchase, hold, and use tokens for project services
- **End Users**: The same as token owners - they are the final consumers of project services
- **Token Holders**: Users who have tokens in their wallets

### Marketing Level
- **Multiple Affiliates**: Individual marketing partners who promote projects and earn commissions
- **Affiliate Codes**: Unique identifiers used to track individual affiliate marketing efforts (e.g., "AFF001", "PROMO2024")
- **Individual Affiliate Wallets**: Each affiliate has their own wallet address for receiving commission rewards
- **Affiliate Rewards**: Commission payments made to individual affiliates for successful referrals
- **Approval Process**: Affiliates sign up on a page and contract owner approves them for their specific project
- **Affiliate Management**: Contract owners can add and remove affiliates for their specific projects
- **Project-Specific Affiliates**: Each project has its own set of approved affiliates

### Development Level
- **Development Team**: Technical team responsible for platform development and maintenance
- **Developer Wallet**: Wallet that receives USDC funding for development activities
- **Smart Contract Development**: Creation and maintenance of blockchain contracts

### Financial Level
- **Project Treasury**: Project-specific funding for operations and growth
- **Project Wallet**: Wallet that receives USDC funding for project activities
- **Liquidity Pool**: Market liquidity management for token trading
- **Liquidity Wallet**: Wallet that receives USDC funding for liquidity management
- **No-Affiliate Wallet**: Default wallet for affiliate commissions when no valid affiliate code is used

### Complete Token Flow
1. Platform contract issues tokens for projects
2. Contract owners create projects on timbuktu.app
3. Affiliates sign up on timbuktu.app and get approved by contract owners
4. Token owners discover projects and purchase tokens through timbuktu.app:
   - **Option A**: Use fiat currency via Coinbase Onramp (automatically converts to USDC)
   - **Option B**: Use existing USDC to donate directly to projects
5. Optional affiliate code can be provided during token purchase
6. USDC is distributed to all stakeholders:
   - Individual affiliate wallet (if valid affiliate code provided)
   - No-affiliate wallet (if invalid affiliate code or no code provided)
   - Developer wallet (development team funding)
   - Project wallet (project treasury)
   - Liquidity wallet (liquidity pool management)
7. Contract owners may need platform assistance for token adjustments
8. Platform owners can mint/burn tokens on behalf of contract owners
9. **Token Upgrades**: Contract owners can upgrade tokens to newer contract versions by paying USDC upgrade fees

### Complete Ownership Structure
- **Platform Owner**: Can perform platform-level operations (mint/burn, ownership transfers)
- **Contract Owner**: Can perform contract-level operations (update no-affiliate wallet, manage project affiliates, approve affiliate applications)
- **Token Owners**: Can purchase, hold, and use tokens for project services
- **Multiple Affiliates**: Each affiliate can earn commissions by promoting projects to token owners (after approval by contract owner)
- **Development Team**: Receives funding for platform development and maintenance
- **Project Treasury**: Receives funding for project operations and growth
- **Liquidity Pool**: Receives funding for market liquidity management
- **No-Affiliate Wallet**: Receives affiliate commissions when no valid affiliate code is used
- **Ownership Transfer**: Only platform owner can update contract owner (requires platform contact)

## 🔧 Technical Specifications

### Contract Details
- **Name**: TimbukToken
- **Symbol**: TIMBUKTOKEN
- **Decimals**: 18
- **Network**: Base Network (Mainnet: 8453, Sepolia: 84532)
- **Standard**: ERC20

### Platform Technology
- **Website**: timbuktu.app
- **CMS**: WordPress
- **Blockchain**: Base Network
- **Token Standard**: ERC20
- **Payment**: USDC integration
- **Fiat Onramp**: Coinbase Onramp integration
- **Payment Methods**: Credit cards, bank transfers, existing USDC

### Future API Capabilities
*Note: These features are planned for future versions beyond the initial MVP*

The platform will provide APIs that project owners can integrate into their own websites to:
- **Publish Project Metrics**: Display real-time project statistics and performance data
- **Show Activity Feeds**: Display recent token purchases, affiliate activities, and project updates
- **Integrate Token Purchases**: Allow direct token purchases from project websites
- **Display Affiliate Information**: Show affiliate performance and commission data
- **Real-time Updates**: Provide live updates on project status and token economics
- **Custom Dashboards**: Enable project owners to create custom analytics dashboards

These APIs will enable seamless integration between the platform and individual project websites, providing a unified experience for token owners while maintaining the platform's centralized management capabilities.

### Key Features
- ✅ **Base Network Native**: Optimized for Base network operations
- ✅ **USDC Integration**: Purchase tokens with USDC
- ✅ **Fiat Onramp**: Coinbase Onramp integration for fiat-to-USDC conversion
- ✅ **Multiple Payment Options**: Credit cards, bank transfers, and existing USDC
- ✅ **Affiliate System**: Support for affiliate marketing
- ✅ **Dual Ownership**: Platform owner and contract owner roles
- ✅ **Platform Management**: Platform owner can mint/burn tokens for project support
- ✅ **Transparent Operations**: All actions logged as events
- ✅ **User-Friendly**: Token owners can easily purchase and use tokens
- ✅ **Complete Distribution**: All USDC is distributed to stakeholders
- ✅ **Public Website**: timbuktu.app provides accessible platform interface
- ✅ **WordPress CMS**: Familiar content management system for easy updates
- ✅ **Contract Versioning**: Seamless token upgrades to newer contract versions
- ✅ **Upgrade System**: Contract owners can upgrade tokens by paying USDC fees

## 🚀 Getting Started

### Platform Access
- **Public Website**: Visit [timbuktu.app](https://timbuktu.app) to access the platform
- **Project Creation**: Contract owners can create projects through the website
- **Affiliate Signup**: Affiliates can register through the website
- **Token Purchase**: Token owners can discover and purchase tokens through the website
- **Payment Options**: Use fiat currency via Coinbase Onramp or existing USDC

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Hardhat development environment

### Installation
```bash
npm install
```

### Configuration
1. Copy `.env.example` to `.env`
2. Configure your environment variables:
   ```
   PRIVATE_KEY=your_private_key
   BASE_RPC_URL=your_base_rpc_url
   USDC_CONTRACT_ADDRESS=base_usdc_address
   PLATFORM_OWNER_ADDRESS=platform_owner_address
   CONTRACT_OWNER_ADDRESS=contract_owner_address
   AFFILIATE_WALLET_ADDRESS=affiliate_wallet_address
   DEVELOPER_WALLET_ADDRESS=developer_wallet_address
   PROJECT_WALLET_ADDRESS=project_wallet_address
   LIQUIDITY_WALLET_ADDRESS=liquidity_wallet_address
   NO_AFFILIATE_WALLET_ADDRESS=no_affiliate_wallet_address
   ```

### Deployment
```bash
# Compile contracts
npx hardhat compile

# Deploy to Base Sepolia (testnet)
npx hardhat run scripts/deploy.js --network base-sepolia

# Deploy to Base Mainnet
npx hardhat run scripts/deploy.js --network base-mainnet
```

## 📋 Contract Functions

### Public Functions (Token Owners)
- `buyTokens(networkId, usdcAmount, affiliateCode)`: Purchase tokens with USDC
- `decimals()`: Returns token decimals (18)
- `totalSupply()`: Returns total token supply
- `balanceOf(address)`: Returns token balance for address

### Platform Owner Functions
- `mint(networkId, to, amount)`: Mint tokens for project support
- `burn(networkId, from, amount)`: Burn tokens for project support
- `updateContractOwner(address)`: Update contract owner (requires platform contact)
- `updatePlatformOwner(address)`: Update platform owner
- `updateContractVersion(version)`: Update contract version number
- `updateUpgradeFee(fee)`: Update USDC fee for token upgrades

### Contract Owner Functions
- `updateNoAffiliateWallet(address)`: Update no-affiliate wallet
- `addAffiliate(code, address)`: Add new affiliate (after approval process)
- `removeAffiliate(code)`: Remove affiliate from project
- `upgradeTokens(amount)`: Upgrade tokens to current contract version (requires USDC fee)

## 🔐 Security Features

### Access Control
- **Platform Owner Functions**: Critical operations restricted to platform owner
- **Contract Owner Functions**: Contract-level operations restricted to contract owner
- **Token Owner Functions**: Public functions for token purchase and balance checking
- **Reentrancy Protection**: Prevents reentrancy attacks
- **SafeERC20**: Safe token transfers using OpenZeppelin

### Safety Checks
- Zero address validation
- Positive amount validation
- Sufficient balance checks
- Network validation (Base only)
- Ownership validation

## 📊 Token Economics

### Complete Distribution Model
- **Affiliate Percentage**: Configurable affiliate rewards for individual marketing partners
- **Developer Percentage**: Platform development funding for development team
- **Project Percentage**: Project-specific funding for project treasury
- **Liquidity Percentage**: Liquidity pool funding for market stability

### USDC Integration
- Token owners can purchase tokens using multiple payment methods:
  - **Fiat Currency**: Credit cards, bank transfers via Coinbase Onramp (automatically converts to USDC)
  - **Existing USDC**: Direct donations from existing USDC holdings
- Optional affiliate code can be provided during purchase
- Automatic conversion from USDC (6 decimals) to tokens (18 decimals)
- Transparent distribution to all configured wallets

### Complete Stakeholder Benefits
- **Token Owners**: Access to project services, potential token appreciation, flexible payment options (fiat or USDC)
- **Contract Owners**: Revenue from token sales, project funding, control over affiliate program, token upgrade management
- **Multiple Affiliates**: Individual commission rewards for successful marketing (after approval by contract owner)
- **Platform Owners**: Platform development funding, operational revenue
- **Development Team**: USDC funding for platform development and maintenance
- **Project Treasury**: USDC funding for project operations and growth
- **Liquidity Pool**: USDC funding for market liquidity and price stability
- **No-Affiliate Wallet**: USDC funding when affiliate codes are invalid or not provided

## 🔄 Platform Support Scenarios

### When Platform Owners May Mint/Burn Tokens

1. **Project Support**:
   - Contract owners need additional tokens mid-project
   - Technical issues require token recovery
   - Project scope changes require supply adjustments

2. **Emergency Situations**:
   - Bug fixes requiring token compensation for token owners
   - Platform-wide issues affecting projects
   - Recovery from technical failures

3. **Operational Needs**:
   - Platform development funding
   - Community incentives for token owners
   - Cross-project initiatives

### Ownership Transfer Process
1. **Contract Owner Request**: Contract owner contacts platform
2. **Platform Verification**: Platform verifies the request
3. **Ownership Update**: Platform owner calls `updateContractOwner()`
4. **Event Emission**: Ownership change is logged on-chain

### Complete Transparency Commitment
- All mint/burn operations are logged as events
- All ownership changes are logged as events
- All token purchases by token owners are logged as events
- All affiliate commissions are logged as events (including which affiliate received the commission)
- All USDC distributions are logged as events
- All wallet address updates are logged as events
- All affiliate additions and removals are logged as events (including approval process)
- All token upgrades are logged as events (including version changes)
- Platform owners commit to transparent communication
- Contract owners are responsible for communicating changes to their token owners
- Contract owners are responsible for transparent affiliate approval processes
- Contract owners are responsible for managing token version upgrades
- Development team activities are transparent and funded through USDC distribution
- Project treasury operations are transparent and funded through USDC distribution
- Liquidity pool management is transparent and funded through USDC distribution

## 🧪 Testing

### Run Tests
```bash
npx hardhat test
```

### Test Coverage
```bash
npx hardhat coverage
```

## 📝 Events

### Key Events
- `TokenMinted`: When tokens are minted
- `TokenBurned`: When tokens are burned
- `USDCReceived`: When USDC is received for token purchase (token owners)
- `USDCDistributed`: When USDC is distributed to all wallets
- `AffiliateAdded`: When new affiliate is added
- `AffiliateRemoved`: When affiliate is removed
- `PlatformOwnerUpdated`: When platform owner is changed
- `ContractOwnerUpdated`: When contract owner is changed
- `ContractVersionUpdated`: When contract version is updated
- `UpgradeFeeUpdated`: When upgrade fee is changed
- `TokensUpgraded`: When tokens are upgraded to newer version

## 🔗 Network Information

### Base Network
- **Mainnet**: Chain ID 8453
- **Sepolia Testnet**: Chain ID 84532
- **RPC URLs**: Available from Base documentation
- **Block Explorer**: https://basescan.org

### USDC on Base
- **Mainnet**: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
- **Sepolia**: `0x036CbD53842c5426634e7929541eC2318f3dCF7c`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For platform support or questions:
- **Platform Website**: Visit [timbuktu.app](https://timbuktu.app) for platform access
- **Platform Issues**: Contact Timbuktu Token Platform
- **Contract Ownership Changes**: Contact platform to update contract owner
- **Token Owner Support**: Contact your project's contract owner
- **Affiliate Support**: Contact your project's contract owner for affiliate program questions, approval, and management
- **Development Team Support**: Contact platform for technical issues
- **Project Treasury Support**: Contact your project's contract owner
- **Liquidity Pool Support**: Contact platform for liquidity management
- **Technical Issues**: Open an issue on GitHub

## 🔮 Future Roadmap

- [ ] Cross-chain bridging support
- [ ] Advanced governance features for token owners
- [ ] Enhanced affiliate system with analytics
- [ ] Mobile wallet integration for token owners
- [ ] Analytics dashboard for all stakeholders
- [ ] Token owner voting mechanisms
- [ ] Advanced affiliate tracking and rewards
- [ ] Development team governance features
- [ ] Project treasury management tools
- [ ] Liquidity pool optimization features
- [ ] Affiliate approval workflow automation
- [ ] Contract owner affiliate management dashboard
- [ ] Enhanced affiliate performance tracking
- [ ] **API Development**: Public APIs for project website integration
- [ ] **Project Metrics API**: Real-time project statistics and performance data
- [ ] **Activity Feed API**: Recent token purchases and affiliate activities
- [ ] **Token Purchase API**: Direct integration for project websites
- [ ] **Affiliate Analytics API**: Performance and commission data
- [ ] **Custom Dashboard API**: Project-specific analytics and reporting
- [ ] **Enhanced Payment Options**: Additional fiat payment methods and currencies
- [ ] **Payment Analytics**: Detailed payment method usage and conversion analytics
- [ ] **Advanced Versioning**: Automated upgrade notifications and batch upgrade capabilities
- [ ] **Version Migration Tools**: Enhanced tools for managing token version transitions
- [ ] **Upgrade Analytics**: Detailed tracking of upgrade patterns and user adoption

---

**Note**: This platform is designed to support multiple projects while maintaining security and transparency. The public website at timbuktu.app provides accessible platform interface for all stakeholders. Token owners can purchase tokens using fiat currency through Coinbase Onramp or donate existing USDC directly to projects. The platform supports seamless token upgrades through versioned contracts, allowing contract owners to upgrade their tokens to newer versions by paying USDC fees that support platform development. Platform owners commit to using their capabilities responsibly to support project success. Contract owners must contact the platform to change ownership addresses and manage their project's affiliate programs. Token owners are the foundation of the ecosystem and their needs are prioritized in all platform decisions. All stakeholders receive transparent funding through the USDC distribution system. Affiliates must be approved by contract owners before they can earn commissions for their specific projects. Future API capabilities will enable seamless integration between the platform and individual project websites.