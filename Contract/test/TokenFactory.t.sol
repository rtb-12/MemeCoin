// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TokenFactory} from "../src/TokenFactory.sol";
import {Token} from "../src/Token.sol";


contract TokenFactoryTest is Test {
    TokenFactory public factory;

    function setUp() public {
        factory = new TokenFactory();
    }

   function test_CreateToken() public {
        string memory name = "Test Token";
        string memory ticker = "TST";
        address tokenAddress = factory.createToken(name, ticker);
        Token token = Token(tokenAddress);
        uint totalSupply = token.totalSupply();
        assert(factory.tokens(tokenAddress) == TokenFactory.TokenState.ICO);
        assertEq(totalSupply, factory.INITIAL_MINT());
        assertEq(token.balanceOf(address(factory)), factory.INITIAL_MINT());
    }
    function test_CalculateEthRequired() public {
        string memory name = "Test Token";
        string memory ticker = "TST";
        address tokenAddress = factory.createToken(name , ticker);
        Token token = Token(tokenAddress);
        uint totalBuyableSupply = factory.MAX_SUPPLY() - factory.INITIAL_MINT();
        uint requiredEth = factory.calculatedRequiredEth(tokenAddress, totalBuyableSupply);
        require(requiredEth > 0, "Required Eth should be greater than 0");
        
    }

}
