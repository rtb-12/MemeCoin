# MemeCoin Generator

A decentralized application (dApp) for generating your own MemeCoin using AI, Web3Auth, and ensuring security against rug pulls. Inspired by projects like Pump.fun, this platform enables users to create, manage, and launch meme tokens without the fear of rug-pulls.

## Features

### 1. **AI-Powered MemeCoin Generation**
   - The core of the platform uses AI to help users automatically generate meme tokens based on input criteria such as tokenomics, name, symbol, and more.
   - AI also assists in generating marketing materials like meme images and slogans for a seamless launch.

### 2. **Web3Auth Integration**
   - The application is secured using **Web3Auth**, providing users with a frictionless, secure, and decentralized way to log in and manage their token.
   - Simple and secure OAuth login for blockchain interaction without needing seed phrases.

### 3. **Rug-Pull Protection**
   - **Solving the rug-pull problem:** The platform employs a smart contract system that locks liquidity and ensures transparency throughout the lifecycle of the token.
   - Funds are locked in a transparent way using smart contracts, giving investors peace of mind.
   - Inspired by the secure practices of **Pump.fun**, we focus on transparency and trust in the MemeCoin ecosystem.

### 4. **Decentralized Token Management**
   - Once the MemeCoin is generated, the user can set up custom parameters for minting, transferring, and burning tokens.
   - The platform supports launching on multiple blockchains, including Ethereum and Binance Smart Chain (BSC).

## Getting Started

Follow the instructions below to set up and run the project on your local machine:

### Prerequisites

- Node.js installed (v14 or higher)
- A valid Firebase account with the FireBaseConfig for Web3Auth integration

### Installation

1. **Clone the repository**:
   git clone https://github.com/rtb-12/MemeCoin.git
   cd MemeCoin

2. **Navigate to the frontend directory**:
   cd frontend

3. **Auth3Page Setup**:
   - Open the `Auth3Page` file.
   - Replace the `clientId` with your Web3Auth `clientId`.
   - Update the `FirebaseConfig` with your Firebase project API details.

4. **Install Dependencies**:
   npm install

5. **Run the Development Server**:
   npm run dev

   The project will now run on `localhost:3000`.

## Smart Contracts

The platform utilizes smart contracts for both MemeCoin creation and rug-pull protection. Here's a breakdown of the contract:

1. **Liquidity Lock**:
   - Tokens generated by users are automatically paired with liquidity, which is locked in a transparent contract for a specified duration.

2. **Token Minting & Burning**:
   - Users can specify minting limits, burn rates, and total supply caps for the generated MemeCoin.

3. **Decentralized Governance**:
   - Once the token reaches a certain threshold, governance rights can be transferred to a decentralized community to make future decisions about the coin's development.

## Contributing

We welcome contributions to improve and expand the features of the MemeCoin generator. Please follow our contribution guidelines outlined in `CONTRIBUTING.md`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, issues, or collaboration requests, please reach out to us at `support@memecoingen.com`.
