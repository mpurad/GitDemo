
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
//		seleniumAddress: 'htp://localhost:4444/wd/hub',  //The url where server is running
		specs: ['elementBasics.js'],    //Spec file whihc needs to be executed
//		ignoreUncaughtExceptions: true,
		directConnect: true,   //Directly open the browser, in case the browser does not open
		capabilities: {
		    browserName: 'chrome',   //Browser in which the test should run, it runs Chrome by default, firefox:for Firefox browser, internet exporer: for Internet Explorer
//		    chromeOptions: {
//		      args: ['--no-sandbox']
//		    },
		},
		
		//If we want to execute a pre-requisite for all the tests(Specs files)
		onPrepare : function(){
			browser.driver.manage().window().maximize();
			jasmine.getEnv().addReporter(
				new Jasmine2HtmlReporter({
					savePath: 'target/screenshots'
				})
			);
		},
		
		//We can run a particular suite by using protractor protractorConfig.js --suite suiteName
//		suite:{
//			smoke : ['chainLocators.js','dropdowns.js'],  //To run smoke suite  
//			regression : ['elementBasics.js']  //To run regression suite  
//		},
		
		// Options to be passed to Jasmine-node.
		  jasmineNodeOpts: {
		    showColors: true, // Use colors in the command line report.
		  }
//		useAllAngular2AppRoots: true,
//		framework: 'jasmine'    //Framework being used  (Optional)
}