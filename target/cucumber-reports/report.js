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
  "name": "user gets the student id and compares with database",
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
        "Seda",
        "abc@gmail.com",
        "12345",
        "SQL",
        "Female",
        "05/15/1995",
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
  "name": "user types \"Seda\" in the firstname input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_firstname_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"abc@gmail.com\" in the email input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_email_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"12345\" in the password input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_password_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"SQL\" in the subject input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_subject_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"Female\" from the select dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_the_select_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"05/15/1995\" from the calendar",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_chooses_from_the_calendar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"2\" in the batch input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_batch_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"123 Main st.\" in the permanent address input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_permanent_address_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Demir\" in the lastname input box",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_types_in_the_lastname_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[.\u003d\u0027All Students\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:50855}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5118fc41658b8090d0810fda0299a4a8\n*** Element info: {Using\u003dxpath, value\u003d//div[.\u003d\u0027All Students\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.getText(Unknown Source)\n\tat step_definitions.TECP241_steps.user_sees_created_student_on_the_page(TECP241_steps.java:149)\n\tat ✽.user sees created student on the \"All Students\" page(src/test/resources/features/TECP-241.feature:28)\n",
  "status": "failed"
});
formatter.step({
  "name": "user searches the name of the created \"Seda\"",
  "keyword": "And "
});
formatter.match({
  "location": "TECP241_steps.user_searches_the_name_of_the_created(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets the student id and compares with database",
  "keyword": "Then "
});
formatter.match({
  "location": "TECP241_steps.user_gets_the_student_id_and_compares_with_database()"
});
formatter.result({
  "status": "skipped"
});
});