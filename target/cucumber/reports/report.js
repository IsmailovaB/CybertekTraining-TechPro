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
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class step_definitions.Delete_Student_Step_Defs\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 32 more\r\nCaused by: java.lang.NullPointerException\r\n\tat utilities.Driver.getDriver(Driver.java:42)\r\n\tat pages.Delete_Student_Page.\u003cinit\u003e(Delete_Student_Page.java:10)\r\n\tat step_definitions.Delete_Student_Step_Defs.\u003cinit\u003e(Delete_Student_Step_Defs.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks student section",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_student_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks All student section",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_All_student_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks to student entry that was checked before from database",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_clicks_to_student_entry_that_was_checked_before_from_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigate.back",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_navigate_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the student",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.user_deletes_the_student()"
});
formatter.result({
  "status": "skipped"
});
});