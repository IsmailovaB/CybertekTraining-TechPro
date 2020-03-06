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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"add-teacher.html\" class\u003d\"btn btn-primary btn-rounded float-right\"\u003e...\u003c/a\u003e is not clickable at point (1344, 113). Other element would receive the click: \u003cli class\u003d\"list-inline-item\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:54466}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 675111d12af66e6af98a077ffa01662f\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\n\tat step_definitions.AddingTeacher_Steps.user_will_click_on_the_Add_Teacher(AddingTeacher_Steps.java:54)\n\tat ✽.User will click on the Add Teacher(src/test/resources/features/AddingTeacher.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "User will fill out the basic information and click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddingTeacher_Steps.user_will_fill_out_the_basic_information_and_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:54642}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: afe8b076b79aa6b5578bb877c7f63fcc\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\n\tat step_definitions.Delete_Student_Step_Defs.user_deletes_the_student(Delete_Student_Step_Defs.java:82)\n\tat ✽.User deletes the student(src/test/resources/features/deleteStudent.feature:10)\n",
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
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/removeTeacher.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verification of deleted teacher ZH",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TECP-238"
    }
  ]
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Student ID\u0027]/preceding-sibling::input\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:54772}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e559e033ef89a734f48c35a5d52c0a4c\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Student ID\u0027]/preceding-sibling::input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\n\tat step_definitions.Tecp229.user_find_udated_student_in_the_table(Tecp229.java:65)\n\tat ✽.User find udated student in the table(src/test/resources/features/student.feature:11)\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Student ID:\u0027]/following-sibling::span\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Begimais-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:109c:bd63:1791:1db%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/dq/0bybqq_j3g7...}, goog:chromeOptions: {debuggerAddress: localhost:54880}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 631fd6a5f819796f26b7e97a2069ef4a\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Student ID:\u0027]/following-sibling::span}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\n\tat step_definitions.Tecp229.user_goes_to_Student_module_and_press_All_Students(Tecp229.java:34)\n\tat ✽.User goes to Student module and press All Students(src/test/resources/features/student.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User choose Student from the datatable and click on it",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_choose_Student_from_the_datatable_and_click_on_it()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User changes \"Jose\" of the student",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_changes_of_the_student(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User changes value of \"FromMexico\" of the student",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_changes_value_of_of_the_student(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_click_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User find udated student in the table",
  "keyword": "And "
});
formatter.match({
  "location": "Tecp229.user_find_udated_student_in_the_table()"
});
formatter.result({
  "status": "skipped"
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