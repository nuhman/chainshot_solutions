pragma solidity ^0.4.19;

contract EscrowContract {

	address public arbiter;
	address public beneficiary;
	address public depositor;

	function EscrowContract(address _arbiter, address _beneficiary) public payable {
		arbiter = _arbiter;
		beneficiary = _beneficiary;
		depositor = msg.sender;
	}

	function approve() public payable {
		depositor.transfer(this.balance);
	}

}
