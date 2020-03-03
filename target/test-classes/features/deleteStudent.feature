Feature: Verify the connection between UI and Date Base
  @deleteStudent
  Scenario: Deleted student should not be seen in database
    Given User goes to data base and checks the specific student information for testing
    And User should go url user should be navigate the page
    And User clicks student section
    And User clicks All student section
    And User clicks to student entry that was checked before from database
    And User navigate.back
    And User deletes the student
    Then The information should be deleted from data