var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var using = require('jasmine-data-provider');

describe("Adding Customer Information", function() {

	var addcustomer = require('../pages/AddCustomerDetails.js');
	var testdata = require('../TestData/userdetails.js');
	
	using(testdata.custdata, function(data) {
		
		it("Add Customer", function() {

			addcustomer.gotoAddCustomer();
			addcustomer.addCustomerInfo(data.FirstName, data.LastName,data.PostCode);
			logger.log('info', 'Adding the Customer Info');
			browser.sleep(2000);
			
            
		});

	});

});