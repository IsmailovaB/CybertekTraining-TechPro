@TECP-251
Feature:Check update functionality wit Database

  Scenario Outline: Update functionality for student
    Given User on Preschool main page login as Student
    And  User goes to Student module and press All Students
    And  User choose Student from the datatable and click on it
    And  User changes "<FirstName>" of the student
    And  User changes value of "<LastName>" of the student
    And  User click submit button
    And User find udated student in the table
    Then Verify first and last name from UI matches "<ExpectedFirstName>""<ExpectedLastName>"
    Then Verify first name from database matches "<ExpectedFirstName>"
    Then Verify last name from database matches "<ExpectedLastName>"
    Examples:
      | FirstName | LastName   | ExpectedFirstName | ExpectedLastName |
      | Patel     | FromIndia  | Patel             | FromIndia        |
#      | Jose      | FromMexico | Jose              | FromMexico       |