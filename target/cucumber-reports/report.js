$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddingTeacher.feature");
formatter.feature({
  "name": "Adding Teacher Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TECP-235"
    }
  ]
});
formatter.background({
  "name": "User is already on Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TECP-235"
    }
  ]
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on the Teachers option from the side bar",
  "keyword": "When "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_will_click_on_the_Teachers_option_from_the_side_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will choose the All Teacher option from the side bar",
  "keyword": "And "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_will_choose_the_All_Teacher_option_from_the_side_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on the Add Teacher",
  "keyword": "And "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_will_click_on_the_Add_Teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will fill out the basic information and click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_will_fill_out_the_basic_information_and_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify that the created teacher exists on the database",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_should_verify_that_the_created_teacher_exists_on_the_database()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/UpdatingTeacherInformation.feature");
formatter.feature({
  "name": "Updating teacher\u0027s information",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TECP-239"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verifiying synchronization of database and UI",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on main (dashboard) page.",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on Teachers tab.",
  "keyword": "When "
});
formatter.step({
  "name": "It should display All Teacher sub tabs.",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on All Teacher sub tab.",
  "keyword": "When "
});
formatter.step({
  "name": "It will navigate to the All Teacher page.",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on three dots of the user then clicks Edit.",
  "keyword": "When "
});
formatter.step({
  "name": "I should navigate to editing page of that user.",
  "keyword": "Then "
});
formatter.step({
  "name": "User changes email addresss \"\u003cemail address\u003e\" of the user.",
  "keyword": "When "
});
formatter.step({
  "name": "User changes mobile number \"\u003cmobile number\u003e\" of the user.",
  "keyword": "And "
});
formatter.step({
  "name": "User changes present address \"\u003cpresent address\u003e\" of the user.",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Submit button.",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that \"\u003cemail address\u003e\" should match email address in database.",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify that \"\u003cmobile number\u003e\" should match mobile number in database.",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify that \"\u003cpresent address\u003e\" should match present address in database.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email address",
        "mobile number",
        "present address"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "3125202020",
        "1705 forest cove drive apt520"
      ]
    },
    {
      "cells": [
        "ZYX@gmail.com",
        "3125201010",
        "1706 forest cove drive apt520"
      ]
    },
    {
      "cells": [
        "ABX@gmail.com",
        "3125201010",
        "1707 forest cove drive apt520"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifiying synchronization of database and UI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TECP-239"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on main (dashboard) page.",
  "keyword": "Given "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_is_on_main_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Teachers tab.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_Teachers_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display All Teacher sub tabs.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.it_should_display_All_Teacher_sub_tabs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on All Teacher sub tab.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_click_on_All_Teacher_sub_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It will navigate to the All Teacher page.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.it_will_navigate_to_the_All_Teacher_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on three dots of the user then clicks Edit.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_three_dots_of_the_user_then_clicks_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should navigate to editing page of that user.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.i_should_navigate_to_editing_page_of_that_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes email addresss \"abc@gmail.com\" of the user.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_email_addresss_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes mobile number \"3125202020\" of the user.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_mobile_number_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes present address \"1705 forest cove drive apt520\" of the user.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_present_address_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Submit button.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"abc@gmail.com\" should match email address in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_email_address_in_database(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: They are not equal. Verification of email address changes FAILED!!! expected:\u003c[jmill]@gmail.com\u003e but was:\u003c[abc]@gmail.com\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat step_definitions.UpdatingTeacherInformation_StepDefs.verify_that_should_match_email_address_in_database(UpdatingTeacherInformation_StepDefs.java:108)\n\tat ✽.Verify that \"abc@gmail.com\" should match email address in database.(src/test/resources/features/UpdatingTeacherInformation.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that \"3125202020\" should match mobile number in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_mobile_number_in_database(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"1705 forest cove drive apt520\" should match present address in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_present_address_in_database(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifiying synchronization of database and UI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TECP-239"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on main (dashboard) page.",
  "keyword": "Given "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_is_on_main_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Teachers tab.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_Teachers_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display All Teacher sub tabs.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.it_should_display_All_Teacher_sub_tabs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on All Teacher sub tab.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_click_on_All_Teacher_sub_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It will navigate to the All Teacher page.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.it_will_navigate_to_the_All_Teacher_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on three dots of the user then clicks Edit.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_three_dots_of_the_user_then_clicks_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should navigate to editing page of that user.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.i_should_navigate_to_editing_page_of_that_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes email addresss \"ZYX@gmail.com\" of the user.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_email_addresss_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes mobile number \"3125201010\" of the user.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_mobile_number_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes present address \"1706 forest cove drive apt520\" of the user.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_present_address_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Submit button.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"ZYX@gmail.com\" should match email address in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_email_address_in_database(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: They are not equal. Verification of email address changes FAILED!!! expected:\u003c[jmill]@gmail.com\u003e but was:\u003c[ZYX]@gmail.com\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat step_definitions.UpdatingTeacherInformation_StepDefs.verify_that_should_match_email_address_in_database(UpdatingTeacherInformation_StepDefs.java:108)\n\tat ✽.Verify that \"ZYX@gmail.com\" should match email address in database.(src/test/resources/features/UpdatingTeacherInformation.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that \"3125201010\" should match mobile number in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_mobile_number_in_database(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"1706 forest cove drive apt520\" should match present address in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_present_address_in_database(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifiying synchronization of database and UI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TECP-239"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on main (dashboard) page.",
  "keyword": "Given "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_is_on_main_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Teachers tab.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_Teachers_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display All Teacher sub tabs.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.it_should_display_All_Teacher_sub_tabs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on All Teacher sub tab.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_click_on_All_Teacher_sub_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It will navigate to the All Teacher page.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.it_will_navigate_to_the_All_Teacher_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on three dots of the user then clicks Edit.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_three_dots_of_the_user_then_clicks_Edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should navigate to editing page of that user.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.i_should_navigate_to_editing_page_of_that_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes email addresss \"ABX@gmail.com\" of the user.",
  "keyword": "When "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_email_addresss_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes mobile number \"3125201010\" of the user.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_mobile_number_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes present address \"1707 forest cove drive apt520\" of the user.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_changes_present_address_of_the_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Submit button.",
  "keyword": "And "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"ABX@gmail.com\" should match email address in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_email_address_in_database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"3125201010\" should match mobile number in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_mobile_number_in_database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"1707 forest cove drive apt520\" should match present address in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_present_address_in_database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/removeTeacher.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
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
    }
  ]
});
formatter.scenario({
  "name": "As a User I should able to delete teacher.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TECP-249"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_is_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Teacher module",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_Teacher_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on All Teacher option",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_All_Teacher_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on one teacher",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_one_teacher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User takes teacher id",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_takes_teacher_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check teacher is stored in the DB",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_check_teacher_is_stored_in_the_DB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User go back to the teacher page",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_go_back_to_the_teacher_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clickes on three dot",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clickes_on_three_dot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on delete teacher button",
  "keyword": "When "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_clicks_on_delete_teacher_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see delete verification pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_should_see_delete_verification_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on delete pop up",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveTeacherSteps.user_Click_on_delete_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "teacher should be able to  deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveTeacherSteps.teacher_should_be_able_to_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});     "FromIndia",
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
formatter.before({
  "status": "passed"
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
formatter.after({
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
formatter.before({
  "status": "passed"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Taylor Kirlin]\u003e but was:\u003c[Jose FromMexico]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat step_definitions.Tecp229.verify_first_and_last_name_from_UI_matches(Tecp229.java:74)\n\tat ✽.Verify first and last name from UI matches \"Jose\"\"FromMexico\"(src/test/resources/features/student.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify first name from database matches \"Jose\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_name_from_database_matches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify last name from database matches \"FromMexico\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_last_name_from_database_matches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});