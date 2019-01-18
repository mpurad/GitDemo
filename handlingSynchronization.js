describe('Handling Synchronization', function(){
	it('Example', function(){
		browser.waitForAngularEnabled(false);
		browser.get("http://qaclickacademy.com/practice.php");
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.elementToBeClickable(element(by.id("displayed-text"))),10000);
		element(by.id("hide-textbox")).click();
		element(by.id("show-textbox")).click();
		
		element(by.id("displayed-text")).getAttribute("name").then(function(name){
			console.log(name);
		})
	})
})

//Protractor handles loading objects and waits in Angular application
//but it does not support synchronization for non angular application, it can be handled using expected conditions 