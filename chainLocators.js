//repeater, chain locators and css for identical tags
describe('Chain Locators', function(){
	it('Open website', function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("4");
		element(by.model("second")).sendKeys("5");
		
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})
	})
})