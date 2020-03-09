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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[@class\u003d\u0027btn btn-success btn-block mt-4 mb-2\u0027])\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c63:561a:661d:33c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:62584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4b8de1563e185700647e3dbe41cae4bf\n*** Element info: {Using\u003dxpath, value\u003d(//a[@class\u003d\u0027btn btn-success btn-block mt-4 mb-2\u0027])}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\n\tat step_definitions.AddingTeacher_Steps.user_should_verify_that_the_created_teacher_exists_on_the_database(AddingTeacher_Steps.java:94)\n\tat ✽.User should verify that the created teacher exists on the database(src/test/resources/features/AddingTeacher.feature:12)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});