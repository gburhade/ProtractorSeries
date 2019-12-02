describe("This is my first Non Angular Test", function() {
	
	it("This app will take reigstry entry", function() 
	{
		//approach 1. browser.ignoreSynchronization=true;
		
        browser.driver.get("http://newtours.demoaut.com/mercuryregister.php?osCsid=e64998a519faa59b32736cfe27551873");
        
        browser.driver.findElement(by.name("firstName")).sendKeys("Gaurav");
        
        browser.driver.findElement(by.name("lastName")).sendKeys("Burhade");
        
        browser.driver.findElement(by.name("userName")).sendKeys("gburhade@medrio.com");
		
		
		
	 });
	
	
});