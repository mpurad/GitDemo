
		
		
describe('Actions demo',function() {  


	it('Open Posse website',function() {
	//moving the mouse into that textbox
		//sendkeys
		//keyboard arrow
		//Keyboard enter
		browser.get("https://posse.com/");
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); //Sends Arrow Down key to the browser
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() //Sends Enter key to the browser
		{
		
			browser.sleep(2000);
			
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			
			
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click().then(function()
			{
				browser.sleep(2000);
			})
		})
		
		browser.getAllWindowHandles().then(function(handles){ //It will store all the open windows window handles in array(handles) 
			browser.switchTo().window(handles[1]); //Switching to different window
		})     
	
	
	})
})