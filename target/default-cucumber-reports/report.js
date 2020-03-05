$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/removeTeacher.feature");
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
    },
    {
      "name": "@TECP-238"
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
});