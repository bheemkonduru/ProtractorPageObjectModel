var base = require('../pages/BasePage.js');
var logger = require('../util/log');

describe("Open Customer Account", function() {

	var addcustomer = require('../pages/AddCustomerDetails.js');

	it("Open Account", function() {

		addcustomer.gotoOpenAccount();
		addcustomer.OpenCustomerAccount("Avinash More", "Rupee")

		logger.log('info', 'Open New Customer Account');
		browser.sleep(1000);

	});

});