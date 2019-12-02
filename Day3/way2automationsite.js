describe("This is Sample Protractor Angular Demo Website", function()
  {
	
	it("This will add User Entries into Webtable", function() 
	{
		browser.get("http://www.way2automation.com/angularjs-protractor/webtables/");
		
		//Clicking on Add New User Link
		element(by.xpath("//button[@type='add']")).click();
		
		element(by.name("FirstName")).sendKeys("Shashi");
		
		element(by.name("LastName")).sendKeys("Tharoor");
		
		element(by.name("UserName")).sendKeys("stharoor");
		
		element(by.name("Password")).sendKeys("stharoor");
		
		element(by.className('radio ng-scope ng-binding')).all(by.tagName('input')).get(0).click();
		
		element(by.cssContainingText('option', 'Admin')).click();
		
		element(by.name("Email")).sendKeys("stharoor@india.com");
		
		element(by.name("Mobilephone")).sendKeys("8795634152");
		
		element(by.xpath("//button[text()='Save']")).click();
	});
	
	
  });