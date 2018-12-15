var HomePage = function() {

	//Locate the elements in the Home Page

	this.custlogin = element(by.buttonText("Customer Login"));
	this.mgrlogin = element(by.buttonText("Bank Manager Login"));

	// Methods in the Home Page

	this.LoginAsCustomer = function() {

		this.custlogin.click();

	};

	this.LoginAsBankManger = function() {

		this.mgrlogin.click();

		return require('./AddCustomerDetails.js');
	};

};
module.exports = new HomePage();
