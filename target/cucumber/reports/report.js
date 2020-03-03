$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/deleteStudent.feature");
formatter.feature({
  "name": "Verify the connection between UI and Date Base",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Deleted student should not be seen in database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteStudent"
    }
  ]
});
formatter.step({
  "name": "User goes to data base and checks the specific student information for testing",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should go url user should be navigate the page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks student section",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks All student section",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks to student entry that was checked before from database",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User navigate.back",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User deletes the student",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The information should be deleted from data",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});