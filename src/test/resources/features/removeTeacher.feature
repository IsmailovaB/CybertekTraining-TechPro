@TECP-249
Feature:

	Scenario: Verification of deleted teacher ZH 
		Scenario: As a User I should able to delete teacher.
		
		Given User is on Dashboard page
		And User clicks on Teacher module
		And User clicks on All Teacher option
		And User clicks on one teacher
		And User takes teacher id
          And User check teacher is stored in the DB
		And User go back to the teacher page 
		And User clickes on three dot
		When User clicks on delete teacher button
		Then User should see delete verification pop up
		And  User Click on delete pop up
		Then teacher should be able to  deleted
          