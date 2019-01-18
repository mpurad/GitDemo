describe('Protractor Example',function() {   //First parameter - Test Suite name, Second parameter - Function(It will contain all test cases(it blocks))
	
	it('Open the application',function() {      //First parameter - Test case name, second parameter - function(Contains code)
		browser.get("https://angularjs.org");
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function() {  // Here then keyword takes care of promise resolution, to handle asynchronous JavaScript code
			console.log("Testing code");
		});
		
	})
	
	it('Close the application',function() {
		
	})
})