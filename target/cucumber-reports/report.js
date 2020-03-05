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
});