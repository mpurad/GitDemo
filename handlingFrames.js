describe('Handling Frames', function(){
	it('Example', function(){
		browser.waitForAngularEnabled(false);
		browser.get("http://qaclickacademy.com/practice.php");
		browser.manage().window().maximize();
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		})
	})
})