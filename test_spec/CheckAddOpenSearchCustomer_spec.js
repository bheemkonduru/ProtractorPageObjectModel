var logger = require('../util/log');

describe("Check Add Open Search Customer Button", function() {

	var addcustomer = require('../pages/AddCustomerDetails.js');

	it("Check Add Customer Button", function() {

		addcustomer.gotoAddCustomer();
		logger.log('info', 'Checking Add Customer Button');
		browser.sleep(1000);
		addcustomer.getlabeladdcustomer().getText().then(function(txt) {

			console.log(txt.length);

		});
		logger.log('info', 'Checking No of Labels for Add Customer');
		var lab = addcustomer.getlabeladdcustomer();

		expect(lab.first().getText()).toBe("First Name :");
		expect(lab.count()).toBe(4);

	});

	it("Check Open Account Button", function() {

		addcustomer.gotoOpenAccount();
		logger.log('info', 'Checking Open Account Button');
		browser.sleep(1000);

	});

	it("Check Search Account Button", function() {

		addcustomer.gotoSearchCustomer();
		logger.log('info', 'Checking Search Account Button');
		browser.sleep(1000);

	});

});