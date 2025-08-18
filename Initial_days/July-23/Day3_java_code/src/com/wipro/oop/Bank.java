package com.wipro.oop;

public abstract class Bank {
	String accountNumber;
	String ifscCode;
	String branchAddress;
	String accountType;
	
	
	
	
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}
	public String getBranchAddress() {
		return branchAddress;
	}
	public void setBranchAddress(String branchAddress) {
		this.branchAddress = branchAddress;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	
	public abstract double withdraw(String accountNumber, double amount);
	public abstract double deposit(String accountNumber, double amount);
	
	@Override
	public String toString() {
		return "Bank [accountNumber=" + accountNumber + ", ifscCode=" + ifscCode + ", branchAddress=" + branchAddress
				+ ", accountType=" + accountType + "]";
	}

	
}

