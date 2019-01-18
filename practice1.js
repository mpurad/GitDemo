describe('Practice1', function(){
	
	function addToCart(product){
		var found = 0;
		element.all(by.tagName("app-card")).each(function(elements) {
			if(found == 0){
				elements.element(by.css("[class='card-title'] a")).getText().then(function(text){				
					if(text == product){
						elements.element(by.buttonText("Add")).click();	
						found = 1;
					}
				})
			}
		})
	}
	
	it('Example', function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		browser.manage().window().maximize();
		
		element(by.css("input[name='name'")).sendKeys("Name1");
		element(by.name("email")).sendKeys("abc@abc.com");
		element(by.id("exampleInputPassword1")).sendKeys("Password");
		element(by.css("input[id='exampleCheck1'][type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option",'Female')).click();
//		element(by.id("inlineRadio1")).click();
		element.all(by.name("inlineRadioOptions")).get(0).click();
		element(by.name("bday")).sendKeys("18-10-1990");
		
		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(text){
				console.log(text);
			})
		})
		
		element(by.css("input[name='name'")).clear();
		element(by.css("input[name='name'")).sendKeys("N");
		element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
			console.log(text);
		})
		
		element.all(by.css("div[class='alert alert-danger']")).count().then(function(count){
			console.log(count);
		})
		
		element(by.linkText("Shop")).click();
		
		addToCart("iphone X");
		addToCart("Samsung Note 8");
		addToCart("Nokia Edge");
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			 var arrRes = text.split("(")
			 var arrRes1 = arrRes[1].split(")")
			 console.log("Number of items in the cart : " + arrRes1[0].trim());
		})
		
		element(by.partialLinkText("Checkout")).click();
		
		var count1 = 0;
		element.all(by.className("btn btn-danger")).count().then(function(count){
			console.log("Number of items in the checkout page : " + count);
			count1 = count;
		})
		
		var total1 = 0, total2=0;
		var count2 = 1;
		element.all(by.css("tbody tr")).each(function(elements) {
			if(count2<=count1){
				elements.element(by.css("td:nth-child(4) strong")).getText().then(function(text){
					var arrRes = text.split(".")
					total1 = total1 + Number(arrRes[1]);
				})
			}
			count2++;
		})
		
		
		
		element(by.xpath("//tr[td[h3[text()='Total']]]//strong")).getText().then(function(text){
			var arrRes = text.split(".")
			total2 = Number(arrRes[1]);
			console.log(total1);
			console.log(total2);
			if(total2==total1){
				console.log("Total is matching");
			}
			else{
				console.log("Total is not matching");
			}
		})

		
	})
})