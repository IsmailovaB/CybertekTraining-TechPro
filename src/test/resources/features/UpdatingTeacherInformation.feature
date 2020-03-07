@TECP-239
Feature: Updating teacher's information
	Scenario Outline: Verifiying synchronization of database and UI

		Given User is on main (dashboard) page.
		When User clicks on Teachers tab.
		Then It should display All Teacher sub tabs.
		When User click on All Teacher sub tab.
		Then It will navigate to the All Teacher page.
		When User clicks on three dots of the user then clicks Edit.
		Then I should navigate to editing page of that user.
		When User changes email addresss "<email address>" of the user.
		And User changes mobile number "<mobile number>" of the user.
		And User changes present address "<present address>" of the user.
		And User clicks on Submit button.
		Then Verify that "<email address>" should match email address in database.
		Then Verify that "<mobile number>" should match mobile number in database.
		Then Verify that "<present address>" should match present address in database.
		
		Examples:
		
		|email address|mobile number|present address               |
		|abc@gmail.com|3125202020   |1705 forest cove drive apt520 |
		|ZYX@gmail.com|3125201010   |1706 forest cove drive apt520 |
		|ABX@gmail.com|3125201010   |1707 forest cove drive apt520 |
		
		