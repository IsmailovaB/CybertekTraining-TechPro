<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TECP-241.feature");
formatter.feature({
  "name": "Adding new Student with informa",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TECP-241"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Filling up Student information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on the \"ADD STUDENT\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "user types \"\u003cFirstname\u003e\" in the firstname input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cEmail\u003e\" in the email input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cPassword\u003e\" in the password input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cSubject\u003e\" in the subject input box",
  "keyword": "And "
});
formatter.step({
  "name": "user chooses \"\u003cGender\u003e\" from the select dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "user chooses \"\u003cBirth Date\u003e\" from the calendar",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cBatch\u003e\" in the batch input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cPermanent Address\u003e\" in the permanent address input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cLastname\u003e\" in the lastname input box",
  "keyword": "And "
});
formatter.step({
  "name": "user chooses \"\u003cJoining Date\u003e\" from calendar",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cConfirm Password\u003e\" to confirm the password",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cMobileNumber\u003e\" in the mobile number input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cMajor\u003e\" in the major input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cCompanyName\u003e\" in the company name input box",
  "keyword": "And "
});
formatter.step({
  "name": "user choose \"\u003cStartDate\u003e\" from calendar",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cStreet\u003e\" in the street name input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cState\u003e\" in the state input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cTitle\u003e\" in the title input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cCity\u003e\" in the city input box",
  "keyword": "And "
});
formatter.step({
  "name": "user types \"\u003cZipCode\u003e\" in the zipcode input box",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks sumbit button",
  "keyword": "And "
});
formatter.step({
  "name": "user sees created student on the \"All Students\" page",
  "keyword": "And "
});
formatter.step({
  "name": "user searches the name of the created \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user gets the student \"\u003cFirstname\u003e\", \"\u003cLastname\u003e\", \"\u003cMajor\u003e\" and compares with database",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Email",
        "Password",
        "Subject",
        "Gender",
        "Birth Date",
        "Batch",
        "Permanent Address",
        "Lastname",
        "Joining Date",
        "Confirm Password",
        "MobileNumber",
        "Major",
        "CompanyName",
        "StartDate",
        "Street",
        "State",
        "Title",
        "City",
        "ZipCode"
      ]
    },
    {
      "cells": [
        "Marmara",
        "ddd@mail.com",
        "55555",
        "Selenium",
        "Male",
        "06/01/1991",
        "11",
        "232 Cicero ave.",
        "Kim",
        "09/01/2020",
        "55555",
        "7778889990",
        "Master",
        "Cebertek2",
        "12/04/2020",
        "2700 S River",
        "IL",
        "QA",
        "Des Plaines",
        "60656"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Filling up Student information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TECP-241"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"ADD STUDENT\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "TECP241_steps.user_on_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Marmara\" in the firstname input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_firstname_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"ddd@mail.com\" in the email input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_email_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"55555\" in the password input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_password_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Selenium\" in the subject input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_subject_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"Male\" from the select dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_the_select_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"06/01/1991\" from the calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_the_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"11\" in the batch input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_batch_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"232 Cicero ave.\" in the permanent address input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_permanent_address_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Kim\" in the lastname input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_lastname_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"09/01/2020\" from calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"55555\" to confirm the password",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_to_confirm_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"7778889990\" in the mobile number input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_mobile_number_input_box(String)"
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/deleteStudent.feature");
formatter.feature({
  "name": "Verification UI and Data Base for deleted student",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Deleted Student Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TECP-231"
    }
  ]
});
formatter.step({
  "name": "User should go url user should be navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_should_go_url_user_should_be_navigate_the_page()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"Master\" in the major input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_major_input_box(String)"
=======
  "name": "User clicks student section",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_student_section()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"Cebertek2\" in the company name input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_company_name_input_box(String)"
=======
  "name": "User clicks All student section",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_All_student_section()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user choose \"12/04/2020\" from calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_choose_from_calendar(String)"
=======
  "name": "User clicks to student entry that was checked before from database",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_to_student_entry_that_was_checked_before_from_database()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"2700 S River\" in the street name input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_street_name_input_box(String)"
=======
  "name": "User checks if the student stored in data base or not",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_checks_if_the_student_stored_in_data_base_or_not()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"IL\" in the state input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"QA\" in the title input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_title_input_box(String)"
=======
  "name": "User navigate.back",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_navigate_back()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"Des Plaines\" in the city input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_city_input_box(String)"
=======
  "name": "User deletes the student",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_deletes_the_student()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"60656\" in the zipcode input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_zipcode_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sumbit button",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_clicks_sumbit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees created student on the \"All Students\" page",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_sees_created_student_on_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches the name of the created \"Marmara\"",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_searches_the_name_of_the_created(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the student \"Marmara\", \"Kim\", \"Master\" and compares with database",
  "keyword": "Then "
});
formatter.match({
  "location": "TECP241_steps.user_gets_the_student_and_compares_with_database(String,String,String)"
=======
  "name": "The information should be deleted from data",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.the_information_should_be_deleted_from_data()"
>>>>>>> ee7e43759715cb13b47e4eef406ae7d7811f9488
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});