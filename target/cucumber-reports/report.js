$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/student.feature");
formatter.feature({
  "name": "Check update functionality wit Database",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TECP-251"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Update functionality for student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on Preschool main page login as Student",
  "keyword": "Given "
});
formatter.step({
  "name": "User goes to Student module and press All Students",
  "keyword": "And "
});
formatter.step({
  "name": "User choose Student from the datatable and click on it",
  "keyword": "And "
});
formatter.step({
  "name": "User changes \"\u003cFirstName\u003e\" of the student",
  "keyword": "And "
});
formatter.step({
  "name": "User changes value of \"\u003cLastName\u003e\" of the student",
  "keyword": "And "
});
formatter.step({
  "name": "User click submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User find udated student in the table",
  "keyword": "And "
});
formatter.step({
  "name": "Verify first and last name from UI matches \"\u003cExpectedFirstName\u003e\"\"\u003cExpectedLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify first name from database matches \"\u003cExpectedFirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify last name from database matches \"\u003cExpectedLastName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "ExpectedFirstName",
        "ExpectedLastName"
      ]
    },
    {
      "cells": [
        "Patel",
        "FromIndia",
        "Patel",
        "FromIndia"
      ]
    },
    {
      "cells": [
        "Jose",
        "FromMexico",
        "Jose",
        "FromMexico"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Update functionality for student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TECP-251"
    }
  ]
});
formatter.step({
  "name": "User on Preschool main page login as Student",
  "keyword": "Given "
});
formatter.match({
  "location": "Tecp229.user_on_Preschool_main_page_login_as_Student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User goes to Student module and press All Students",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_goes_to_Student_module_and_press_All_Students()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose Student from the datatable and click on it",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_choose_Student_from_the_datatable_and_click_on_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes \"Patel\" of the student",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_changes_of_the_student(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes value of \"FromIndia\" of the student",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_changes_value_of_of_the_student(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User find udated student in the table",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_find_udated_student_in_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify first and last name from UI matches \"Patel\"\"FromIndia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_and_last_name_from_UI_matches(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify first name from database matches \"Patel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_name_from_database_matches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify last name from database matches \"FromIndia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_last_name_from_database_matches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update functionality for student",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TECP-251"
    }
  ]
});
formatter.step({
  "name": "User on Preschool main page login as Student",
  "keyword": "Given "
});
formatter.match({
  "location": "Tecp229.user_on_Preschool_main_page_login_as_Student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User goes to Student module and press All Students",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_goes_to_Student_module_and_press_All_Students()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose Student from the datatable and click on it",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_choose_Student_from_the_datatable_and_click_on_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes \"Jose\" of the student",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_changes_of_the_student(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes value of \"FromMexico\" of the student",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_changes_value_of_of_the_student(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User find udated student in the table",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_find_udated_student_in_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify first and last name from UI matches \"Jose\"\"FromMexico\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_and_last_name_from_UI_matches(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify first name from database matches \"Jose\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_name_from_database_matches(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify last name from database matches \"FromMexico\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_last_name_from_database_matches(String)"
});
formatter.result({
  "status": "passed"
});
});