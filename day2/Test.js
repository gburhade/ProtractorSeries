describe("This is my first Protractor Test", function() {
	
	it("This app will add two numbers", function() 
	{
        browser.get("http://juliemr.github.io/protractor-demo/");
        
        element(by.model("first")).sendKeys("5");
        
        element(by.model("second")).sendKeys("10");
        
        element(by.id("gobutton")).click();
        
        expect(element(by.className("ng-binding")).getText()).toEqual("16");
		
		
		
	 });
	
	
});