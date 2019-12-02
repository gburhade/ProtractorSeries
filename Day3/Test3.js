describe("This is Demo Protractor Test", function() {
	
	it("This will add Details in Form", function() 
	{
        browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");
        
        element(by.name("name")).sendKeys("Gaurav Burhade");
        
        element(by.name("email")).sendKeys("gaurav.burhade77@medrio.com");
        
        element(by.className("btn btn-block btn-info")).click();
        
        element(by.className('radio')).all(by.tagName('input')).get(0).click();
       
        
        element(by.className("btn btn-block btn-info")).click();
        
        element(by.className("btn btn-danger")).click();
        
        
		
		
		
	 });
	
	
});