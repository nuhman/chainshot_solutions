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
		require(msg.sender == arbiter);
		Approved(this.balance);
		depositor.transfer(this.balance);
	}

	event Approved(uint bal);

}
