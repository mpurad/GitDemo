describe('Handling Alerts', function(){
	it('Example', function(){
		browser.waitForAngularEnabled(false);
		browser.get("http://qaclickacademy.com/practice.php");
		
		element(by.id("confirmbtn")).click();
		browser.switchTo().alert().dismiss().then(function(){
			browser.sleep(2000);
		})
	})
})