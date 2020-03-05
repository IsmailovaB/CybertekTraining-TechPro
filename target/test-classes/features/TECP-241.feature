@TECP-241
Feature: Adding new Student with informa

  Scenario Outline: Filling up Student information
    Given User on the "ADD STUDENT" page
    And user types "<Firstname>" in the firstname input box
    And user types "<Email>" in the email input box
    And user types "<Password>" in the password input box
    And user types "<Subject>" in the subject input box
    And user chooses "<Gender>" from the select dropdown
    And user chooses "<Birth Date>" from the calendar
    And user types "<Batch>" in the batch input box
    And user types "<Permanent Address>" in the permanent address input box
    And user types "<Lastname>" in the lastname input box
    And user chooses "<Joining Date>" from calendar
    And user types "<Confirm Password>" to confirm the password
    And user types "<MobileNumber>" in the mobile number input box
    And user types "<Major>" in the major input box

    And user types "<CompanyName>" in the company name input box
    And user choose "<StartDate>" from calendar
    And user types "<Street>" in the street name input box
    And user types "<State>" in the state input box
    And user types "<Title>" in the title input box
    And user types "<City>" in the city input box
    And user types "<ZipCode>" in the zipcode input box
    And user clicks sumbit button
    And user sees created student on the "All Students" page
    And user searches the name of the created "<Firstname>"
    Then user gets the student "<Firstname>", "<Lastname>", "<Major>" and compares with database

    Examples:
      | Firstname | Email        | Password | Subject  | Gender | Birth Date | Batch | Permanent Address | Lastname | Joining Date | Confirm Password | MobileNumber | Major  | CompanyName | StartDate  | Street       | State | Title | City        | ZipCode |
#      | Seda      | abcxcv@gmail.com | 12345    | SQL     | Female | 05/12/1995 | 2     | 123 Main st.      | Demir    | 12/02/2020   | 12345            | 7772227272   | Master | Cybertek    | 09/03/2020 | 123 Main st. | IL    | SDET  | Chicago | 60016   |
      | Marmara    | ddd@mail.com | 55555    | Selenium | Male   | 06/01/1991 | 11    | 232 Cicero ave.   | Kim      | 09/01/2020   | 55555            | 7778889990   | Master | Cebertek2   | 12/04/2020 | 2700 S River | IL    | QA    | Des Plaines | 60656   |
