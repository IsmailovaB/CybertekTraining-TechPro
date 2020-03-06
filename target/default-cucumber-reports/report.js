<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TECP-241.feature");
formatter.feature({
  "name": "Adding new Student with informa",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/removeTeacher.feature");
formatter.feature({
  "name": "",
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
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
        "Sonya",
        "abcxcv@gmail.com",
        "12345",
        "SQL",
        "Female",
        "05/12/1995",
        "2",
        "123 Main st.",
        "Demir",
        "12/02/2020",
        "12345",
        "7772227272",
        "Master",
        "Cybertek",
        "09/03/2020",
        "123 Main st.",
        "IL",
        "SDET",
        "Chicago",
        "60016"
      ]
    },
    {
      "cells": [
        "Mikki",
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
=======
      "name": "@TECP-249"
    }
  ]
});
formatter.scenario({
  "name": "Verification of deleted teacher ZH",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TECP-249"
    },
    {
      "name": "@TECP-238"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
    }
  ]
});
formatter.scenario({
<<<<<<< HEAD
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
  "name": "user types \"Sonya\" in the firstname input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_firstname_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"abcxcv@gmail.com\" in the email input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_email_input_box(String)"
=======
  "name": "As a User I should able to delete teacher.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TECP-249"
    }
  ]
});
formatter.step({
  "name": "User is on Dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_is_on_Dashboard_page()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"12345\" in the password input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_password_input_box(String)"
=======
  "name": "User clicks on Teacher module",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_Teacher_module()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"SQL\" in the subject input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_subject_input_box(String)"
=======
  "name": "User clicks on All Teacher option",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_All_Teacher_option()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user chooses \"Female\" from the select dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_the_select_dropdown(String)"
=======
  "name": "User clicks on one teacher",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_one_teacher()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user chooses \"05/12/1995\" from the calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_the_calendar(String)"
=======
  "name": "User takes teacher id",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_takes_teacher_id()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"2\" in the batch input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_batch_input_box(String)"
=======
  "name": "User check teacher is stored in the DB",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_check_teacher_is_stored_in_the_DB()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"123 Main st.\" in the permanent address input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_permanent_address_input_box(String)"
=======
  "name": "User go back to the teacher page",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_go_back_to_the_teacher_page()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"Demir\" in the lastname input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_lastname_input_box(String)"
=======
  "name": "User clickes on three dot",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clickes_on_three_dot()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user chooses \"12/02/2020\" from calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"12345\" to confirm the password",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_to_confirm_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"7772227272\" in the mobile number input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_mobile_number_input_box(String)"
=======
  "name": "User clicks on delete teacher button",
  "keyword": "When "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_delete_teacher_button()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Cybertek\" in the company name input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_company_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose \"09/03/2020\" from calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_choose_from_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"123 Main st.\" in the street name input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_street_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "name": "user types \"SDET\" in the title input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_title_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Chicago\" in the city input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"60016\" in the zipcode input box",
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
  "name": "user searches the name of the created \"Sonya\"",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_searches_the_name_of_the_created(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the student \"Sonya\", \"Demir\", \"Master\" and compares with database",
  "keyword": "Then "
});
formatter.match({
  "location": "TECP241_steps.user_gets_the_student_and_compares_with_database(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
=======
  "name": "User should see delete verification pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_should_see_delete_verification_pop_up()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user types \"Mikki\" in the firstname input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_firstname_input_box(String)"
=======
  "name": "User Click on delete pop up",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_Click_on_delete_pop_up()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Master\" in the major input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_major_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Cebertek2\" in the company name input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_company_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose \"12/04/2020\" from calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_choose_from_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"2700 S River\" in the street name input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_street_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Des Plaines\" in the city input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "name": "user searches the name of the created \"Mikki\"",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_searches_the_name_of_the_created(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the student \"Mikki\", \"Kim\", \"Master\" and compares with database",
  "keyword": "Then "
});
formatter.match({
  "location": "TECP241_steps.user_gets_the_student_and_compares_with_database(String,String,String)"
=======
  "name": "teacher should be able to  deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveTeacherSteps.teacher_should_be_able_to_deleted()"
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.after({
  "status": "passed"
});
=======
>>>>>>> 65bd9aa5db3564a92e845dd9d73ec70e7a7c2a0e
});