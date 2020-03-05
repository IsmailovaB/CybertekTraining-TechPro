@TECP-235
Feature: Adding Teacher Functionality

  Background: User is already on Home Page

  Scenario: Adding teacher
    Given User is on homepage
    When User will click on the Teachers option from the side bar
    And  User will choose the All Teacher option from the side bar
    And  User will click on the Add Teacher
    And  User will fill out the basic information and click the submit button
    Then User should verify that the created teacher exists on the database



#    And  User will type FirstName in the box
#    And  User will type LastName in the box
#    And  User will type Email in the box
#    And  User will type JoiningDate in the box
#    And  User will type Password in the box
#    And  User will type ConfirmPassword in the box
#    And  User will type Subject in the box
#    And  User will type MobileNumber in the box
#    And  User will select a Gender from the given option
#    And  User will select a Department from the given option
#    And  User will type BirthDate in the box
#    And  User will type the Salary in the box
#    And  User will select the Batch from teh given option
#    And  User will type Section in the box
#    And  User will type PermanentAddress in the box



		