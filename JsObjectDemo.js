function car(){
	
	this.firstInput = element(by.model("first"));
	this.secondInput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.getResult = element(by.css("h2[class='ng-binding']"));
	this.colour = "Red";
	this.engine = "Turbo";
	this.brand = "BMW";
	
	this.launchURL = function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	};
};

module.exports = new car();
//a.getModel();
//console.log(a.engine);
//console.log(a.colour);