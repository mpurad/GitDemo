describe('Validating Dropdown', function(){
	
	//Resuable functions should be written inside describe l=block and outside it block
	function calculation(a,b,operator){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(elements) { //Resolving promises with each and it repeats for all the elements identified
			elements.getAttribute("value").then(function(value){
				if(value==operator){
					elements.click();
				}
			})
		})
		
		element(by.id("gobutton")).click();
	}
	
	it('Locators', function(){
		
//		browser.waitForAngularEnabled(false);  // Disabling wait for angular in case of working with Non-Angular applications
//		browser.get("http://www.google.com"); //Could not find angular on page, if non-angular page
//		browser.waitForAngularEnabled(true); // Enabling wait for angular in case of working with Non-Angular applications
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		calculation(2,3,"ADDITION");
		calculation(3,4,"SUBTRACTION");
		calculation(5,6,"MULTIPLICATION");
		calculation(7,4,"DIVISION");
		calculation(5,2,"MODULO");
		calculation(0,5,"MULTIPLICATION");	
		
		element.all(by.repeater("result in memory")).each(function(elements) { //Resolving promises with each and it repeats for all the elements identified
			elements.element(by.css("td:nth-child(2)")).getText().then(function(text){
				console.log(text);
			})
			
			elements.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
	})
})