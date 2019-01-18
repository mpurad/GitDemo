describe('Protractor Element Demo', function(){
	
	//Resuable functions should be written inside describe l=block and outside it block
	function add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element(by.id("gobutton")).click();
	}
	
	it('Locators', function(){
		
//		browser.waitForAngularEnabled(false);  // Disabling wait for angular in case of working with Non-Angular applications
//		browser.get("http://www.google.com"); //Could not find angular on page, if non-angular page
//		browser.waitForAngularEnabled(true); // Enabling wait for angular in case of working with Non-Angular applications
		browser.get("http://juliemr.github.io/protractor-demo/");
		add(4,5);
		add(5,6);
		add(4,9);
		add(0,3);
		add(7,0);
		add(8,10);

		console.log("Change");
		console.log("Changed in develop branch");

		
		element.all(by.repeater("result in memory")).count().then(function(count){
			console.log("Number of results : " + count);
		})
		
//		element.all(by.repeater("result in memory")).get(index) - To get a element based on the index
		
		element.all(by.repeater("result in memory")).each(function(elements) { //Resolving promises with each and it repeats for all the elements identified
			elements.element(by.css("td:nth-child(3")).getText().then(function(text){
				console.log(text);
			})
		})
	})
})