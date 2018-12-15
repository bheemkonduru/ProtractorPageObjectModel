var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var url = require('../json/URL.json');

describe("Login Test", function() {

	var home_page = require('../pages/HomePage.js');
	var custpage = require('../pages/AddCustomerDetails.js');
	var base = require('../pages/BasePage.js');

	/* it("Login As Customer", function() {
	
		
		base.navigatetourl("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		home_page.LoginAsCustomer();
		browser.sleep(3000);
		var title=base.getpagetitle();
		title.then(function(tle) {
			console.log(tle);
			
		});
		expect(title).toContain("practice website");
		
		});
	 */
	it("Login As Bank Manager", function() {

		base.navigatetourl(url.testsiteurl);
		home_page.LoginAsBankManger();
		var title = base.getpagetitle();

		browser.sleep(1000);
		expect(title).toContain("Protractor");

		logger.log('info', 'Login As Bank Manager');
		browser.sleep(1000);
		custpage.getbuttonlabels(custpage.buttons);
        console.log("Global Label are"+global.mylabel);

	});

	it("Validate Labels of the Button", function() {
       
		custpage.getbuttonlabels(custpage.buttons);
        console.log("Global Label are..."+global.mylabel);
		/*lbl.getText().then(function(txt) {
			console.log(txt);
		});
		expect(lbl.getText()).toEqual([ 'Add Customer', 'Open Account', 'Customers1' ]);
*/
		logger.log('info', 'Checking the Button Labels');
		browser.sleep(1000);
		custpage.getbuttonlabels(custpage.buttons);
        console.log("Global Label are... "+global.mylabel);
	});

});
