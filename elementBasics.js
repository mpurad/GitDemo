describe('Protractor Element Demo', function(){
	var obj = require('./JsObjectDemo.js');
	var using = require('jasmine-data-provider');
	var dataObj = require('./dataProvider.js');
	
	//set up method - pre-requisite for this particular test
	beforeEach(function(){
		obj.launchURL();
	});

	//Using dataprovider with the test case using 'using' block. It will iterate for all the data sets.
	//data - It will contain all the data in the daatProvider file.
	//descripiton - It will contain sub object names.
	using(dataObj.dataDriven, function(data, description){
		it("Testing calculator functionality: " + description, function(){		
//			browser.waitForAngularEnabled(false);  // Disabling wait for angular in case of working with Non-Angular applications
//			browser.get("http://www.google.com"); //Could not find angular on page, if non-angular page
//			browser.waitForAngularEnabled(true); // Enabling wait for angular in case of working with Non-Angular applications
			
			
			obj.firstInput.sendKeys(data.firstInput);
			obj.secondInput.sendKeys(data.secondInput);
			
			obj.goButton.click();
			
			
			//Jasmine takes care of resolving promises
			//Screeshots will be taken by jasmine html reporter automatically during assertions
			expect(obj.getResult.getText()).toBe(data.result); //toEqual-To compare numbers and literals, toMatch-To find if a substing is present 
			obj.getResult.getText().then(function(text){
				console.log(text);
			});

			//Real output will display only on resolving promise, you might get some junk output or sequence will not be guaranteed
			
		});
	});
	
	
	//tear down method
	afterEach(function(){
		console.log("Test case is completed");
	});
})