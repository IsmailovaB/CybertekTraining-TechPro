Feature: Verification UI and Data Base for deleted student
	@TECP-231
	Scenario: Deleted Student Verification
		Given User should go url user should be navigate the page
		And User clicks student section
		And User clicks All student section
		And User clicks to student entry that was checked before from database
	    And User checks if the student stored in data base or not
		And User navigate.back
		Then User deletes the student
	    Then The information should be deleted from data
		 