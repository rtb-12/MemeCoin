// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import "./Token.sol";
import "@uniswap-v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap-v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap-v2-core/contracts/interfaces/IUniswapV2Pair.sol";

contract TokenFactory {
    
    uint constant public DECIMALS = 10 ** 18;
    uint constant public MAX_SUPPLY = (10 ** 9) * DECIMALS;
    uint constant public INITIAL_MINT = MAX_SUPPLY * 20 / 100;
    uint constant public k = 46875;
    uint constant public offset = 18750000000000000000000000000000;
    uint constant public SCALING_FACTOR = 10 ** 39;
    uint constant public FUNDING_GOAL = 10 ether;
    address constant public UNISWAP_V2_FACTORY = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f; // mainnet address
    address constant public UNISWAP_V2_ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D; // mainnet router address
    enum TokenState {NOT_CREATED, ICO ,TRADING}
    mapping(address => TokenState ) public tokens;
    mapping(address => uint) public collateral; // amount of  ETH reviced for each token
    mapping(address => mapping(address => uint)) public balances; // amount of token owned by each address

    function createToken(string memory name, string memory ticker) external returns (address) {
        // Create a new instance of the Token contract with initial minting
        Token token = new Token(name, ticker, INITIAL_MINT);
        tokens[address(token)] = TokenState.ICO;
        return address(token);

    }

    function buyToken (address tokenAddress, uint amount) external payable {
        require(tokens[tokenAddress] == TokenState.ICO , "Token does not exist or not available for ICO");
        Token token = Token(tokenAddress);
        uint availablsupply = MAX_SUPPLY -INITIAL_MINT- token.totalSupply(); 
        require(availablsupply >= amount, "Not enough tokens available");
        uint requiredEth = calculatedRequiredEth(tokenAddress, amount);
        require(msg.value >= requiredEth, "Not enough Eth sent");
        collateral[tokenAddress] += requiredEth;
        balances[tokenAddress][msg.sender] += amount;
        token.mint(address(this), amount);

        if(collateral[tokenAddress] >= FUNDING_GOAL ){
           //TO CREATE A LIQUIDITY POOL 
           address pool =_createLiquidityPool(tokenAddress);
           //PROVIDE LIQUIDITY 
           uint liquidity = _provideLiquidity(tokenAddress, INITIAL_MINT, collateral[tokenAddress]);
           //BURN LP TOKENS 
           _burnLPTokens(pool, liquidity);
        }
    }

    function calculatedRequiredEth(address tokenAddress, uint amount) public returns (uint) {
    Token token = Token(tokenAddress);
    uint totalSupply = token.totalSupply();
    require(totalSupply >= INITIAL_MINT, "Total supply is less than initial mint");

    uint b = totalSupply - INITIAL_MINT;
    uint a = b + amount; // Ensure a is always greater than or equal to b

    require(b >= totalSupply - INITIAL_MINT, "Underflow in calculation of b");
    require(a >= b, "Underflow in calculation of a");

    uint fa = k * a + offset;
    uint fb = k * b + offset;
    require((fa + fb) / 2 <= type(uint).max / (a - b), "Overflow in final calculation");

    return (a - b) * (fa + fb) / (2 * SCALING_FACTOR);
}

    function withdraw(address tokenAddress ,address to ) external {
        require(tokens[tokenAddress] == TokenState.TRADING , "Token does not exist or hasn't reached funding goal");
        uint balance =balances[tokenAddress][msg.sender];
        require(balance > 0, "No balance to withdraw");
        Token token =Token(tokenAddress);
        token.transfer(to, balance);
    }
    function _createLiquidityPool(address tokenAddress)  internal returns(address) {
        Token token = Token(tokenAddress);
        IUniswapV2Factory factory = IUniswapV2Factory(UNISWAP_V2_FACTORY);
        IUniswapV2Router02 router = IUniswapV2Router02(UNISWAP_V2_ROUTER);

        address pair = factory.createPair(tokenAddress, router.WETH());
        return pair;
    }

    function _provideLiquidity(address tokenAddress, uint amountToken, uint amountEth) internal returns(uint) {
        Token token = Token(tokenAddress);
        IUniswapV2Router02 router = IUniswapV2Router02(UNISWAP_V2_ROUTER);
        token.approve(UNISWAP_V2_ROUTER, amountToken);
        (uint _amountToken , uint _amountETH , uint liquidity) = router.addLiquidityETH{value: amountEth}(
            tokenAddress,
            amountToken,
            amountToken,
            amountEth,
            address(this),
            block.timestamp
        );
        return liquidity;
    }

    function _burnLPTokens(address poolAddress, uint amount) internal {
        IUniswapV2Pair pool = IUniswapV2Pair(poolAddress);
        pool.transfer(address(0), amount);
    }
}
