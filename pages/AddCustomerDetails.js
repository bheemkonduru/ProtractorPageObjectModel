var SelectWrapper = require('../util/select-wrapper.js');
global.mylabel;

var AddCustomerDetails = function() {

	this.addcustomer = element(by.buttonText("Add Customer"));
	this.openaccount = element(by.buttonText("Open Account"));
	this.customers = element(by.buttonText("Customers"));

	this.firstname = element(by.model("fName"));
	this.lastname = element(by.model("lName"));
	this.postalcode = element(by.model("postCd"));
	this.submitinfo = element(by.xpath("//button[@type='submit']"));

	this.openaccountprocess = element(by.buttonText("Process"));
	this.searchcustomer = element(by.model("searchCustomer"));
	this.deletecustomer = element(by.xpath("//button[.='Delete']"));
	this.buttons = element.all(by.xpath("//button[@class='btn btn-lg tab']"));
	
	this.gotoAddCustomer = function() {

		this.addcustomer.click();

		
	};

	this.gotoOpenAccount = function() {

		this.openaccount.click();

		return this;

	};

	this.gotoSearchCustomer = function() {

		this.customers.click();
		return this;
	};

	this.addCustomerInfo = function(FirstName, LastName, PostalCode) {

		this.firstname.sendKeys(FirstName);
		this.lastname.sendKeys(LastName);
		this.postalcode.sendKeys(PostalCode);
		this.submitinfo.click();
		browser.switchTo().alert().accept();
		return this;
		

	};

	this.OpenCustomerAccount = function(Cust, Currency) {

		var mySelect = new SelectWrapper(by.id("userSelect"));
		mySelect.selectByText(Cust);
		browser.sleep(3000);
		var mySelect = new SelectWrapper(by.id("currency"));
		mySelect.selectByText(Currency);
		browser.sleep(3000);
		this.openaccountprocess.click();
		browser.switchTo().alert().accept();
		browser.sleep(3000);
		return this;
		
	};

	this.SearchCustomerRecord = function(Customer) {

		this.searchcustomer.sendKeys(Customer);
		browser.sleep(1000);
		this.deletecustomer.click();
		browser.sleep(1000);
		return this;

	};

	this.getlabeladdcustomer = function() {

		var labels = element.all(by.xpath("//div[@class='form-group']/label"));
		return labels;

	};

	this.getbuttonlabels = function(buttons) {

		
		buttons.getText().then(function(txt1){
		//	console.log(txt);
			mylabel=txt1;
		});
		
		
		//return buttons;
	};

};
module.exports = new AddCustomerDetails();