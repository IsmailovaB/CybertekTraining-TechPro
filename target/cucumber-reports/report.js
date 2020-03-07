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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@type\u003d\u0027text\u0027])[5]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:52864}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 06118f13c3e3cf27a42e2df2086ba4a2\n*** Element info: {Using\u003dxpath, value\u003d(//input[@type\u003d\u0027text\u0027])[5]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\n\tat step_definitions.AddingTeacher_Steps.user_will_fill_out_the_basic_information_and_click_the_submit_button(AddingTeacher_Steps.java:74)\n\tat ✽.User will fill out the basic information and click the submit button(src/test/resources/features/AddingTeacher.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should verify that the created teacher exists on the database",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_should_verify_that_the_created_teacher_exists_on_the_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/TECP-241.feature");
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
  "name": "user chooses \"05/12/1995\" from the calendar",
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \"Mikki\" in the firstname input box",
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
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"3125202020\" should match mobile number in database.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdatingTeacherInformation_StepDefs.verify_that_should_match_mobile_number_in_database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"1705 forest cove drive apt520\" should match present address in database.",
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
  "error_message": "org.junit.ComparisonFailure: They are not equal. Verification of email address changes FAILED!!! expected:\u003c[estone]@gmail.com\u003e but was:\u003c[ZYX]@gmail.com\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat step_definitions.UpdatingTeacherInformation_StepDefs.verify_that_should_match_email_address_in_database(UpdatingTeacherInformation_StepDefs.java:108)\n\tat ✽.Verify that \"ZYX@gmail.com\" should match email address in database.(src/test/resources/features/UpdatingTeacherInformation.feature:16)\n",
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
formatter.uri("src/test/resources/features/deleteStudent.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "The information should be deleted from data",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_Student_Step_Defs.the_information_should_be_deleted_from_data()"
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
formatter.uri("src/test/resources/features/student.feature");
formatter.feature({
  "name": "Check update functionality wit Database",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TECP-251"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Update functionality for student",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User on Preschool main page login as Student",
  "keyword": "Given "
});
formatter.step({
  "name": "User goes to Student module and press All Students",
  "keyword": "And "
});
formatter.step({
  "name": "User choose Student from the datatable and click on it",
  "keyword": "And "
});
formatter.step({
  "name": "User changes \"\u003cFirstName\u003e\" of the student",
  "keyword": "And "
});
formatter.step({
  "name": "User changes value of \"\u003cLastName\u003e\" of the student",
  "keyword": "And "
});
formatter.step({
  "name": "User click submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User find udated student in the table",
  "keyword": "And "
});
formatter.step({
  "name": "Verify first and last name from UI matches \"\u003cExpectedFirstName\u003e\"\"\u003cExpectedLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify first name from database matches \"\u003cExpectedFirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify last name from database matches \"\u003cExpectedLastName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "ExpectedFirstName",
        "ExpectedLastName"
      ]
    },
    {
      "cells": [
        "Patel",
        "FromIndia",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Student ID\u0027]/preceding-sibling::input\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:53588}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bc5c0a2d8f3c97007cb81b7c17028488\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Student ID\u0027]/preceding-sibling::input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\n\tat step_definitions.Tecp229.user_find_udated_student_in_the_table(Tecp229.java:66)\n\tat ✽.User find udated student in the table(src/test/resources/features/student.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify first and last name from UI matches \"Patel\"\"FromIndia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_and_last_name_from_UI_matches(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify first name from database matches \"Patel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_name_from_database_matches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify last name from database matches \"FromIndia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_last_name_from_database_matches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Student ID\u0027]/preceding-sibling::input\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:53695}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ec5938f4045492374fb0b9f557aafe69\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Student ID\u0027]/preceding-sibling::input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\n\tat step_definitions.Tecp229.user_find_udated_student_in_the_table(Tecp229.java:66)\n\tat ✽.User find udated student in the table(src/test/resources/features/student.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify first and last name from UI matches \"Jose\"\"FromMexico\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Tecp229.verify_first_and_last_name_from_UI_matches(String,String)"
});
formatter.result({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
});