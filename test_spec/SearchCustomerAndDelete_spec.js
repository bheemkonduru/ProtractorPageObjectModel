var base = require('../pages/BasePage.js');
var logger = require('../util/log');

describe("Search Customer And Delete", function() {

	var addcustomer = require('../pages/AddCustomerDetails.js');

	it("Search Customer", function() {

		addcustomer.gotoSearchCustomer();
		browser.sleep(2000);
		addcustomer.SearchCustomerRecord("Avinash");
		logger.log('info', 'Searching the Customer Account');
		browser.sleep(1000);

	});

});