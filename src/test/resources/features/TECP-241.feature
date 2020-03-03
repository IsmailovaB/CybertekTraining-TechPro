Feature: Adding new Student with informa


  @TECP-241
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
    And user chooses "<StartDate>" from calendar
    And user types "<Street>" in the company name input box
    And user types "<State>" in the company name input box
    And user types "<Title>" in the company name input box
    And user types "<City>" in the company name input box
    And user types "<ZipCode>" in the company name input box
    Examples:
      | Firstname | Email         | Password | Subject  | Permanent Address | Lastname | Confirm Password | MobileNumber | Major  | CompanyName | Street       | State | Title | City        | ZipCode |
      | Seda      | abc@gmail.com | 12345    | SQL      | 123 Main st.      | Demir    | 12345            | 7772227272   | Master | Cybertek    | 123 Main st. | IL    | SDET  | Chicago     | 60016   |
      | Bema      | ddd@mail.com  | 55555    | Selenium | 232 Cicero ave.   | Kim      | 55555            | 7778889990   | Master | Cebertek2   | 2700 S River | IL    | QA    | Des Plaines | 60656   |
