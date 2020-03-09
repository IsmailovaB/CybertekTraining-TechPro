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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should go url user should be navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_should_go_url_user_should_be_navigate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks student section",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_student_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks All student section",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_All_student_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to student entry that was checked before from database",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_to_student_entry_that_was_checked_before_from_database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks if the student stored in data base or not",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_checks_if_the_student_stored_in_data_base_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate.back",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_navigate_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User deletes the student",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_deletes_the_student()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat step_definitions.Delete_Student_Step_Defs.user_deletes_the_student(Delete_Student_Step_Defs.java:94)\r\n\tat ✽.User deletes the student(src/test/resources/features/deleteStudent.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The information should be deleted from data",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.the_information_should_be_deleted_from_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check UI if it is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.check_UI_if_it_is_deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});