$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/NopComerc/Login.feature");
formatter.feature({
  "name": "Login feature for NopComerc",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is on the login page NC",
  "keyword": "Given "
});
formatter.step({
  "name": "NC User enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on the login button NC",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigated to homepage NC",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "qtester94+042011@gmail.com",
        "+oE2JFL33Fg\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is on the login page NC",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepNC.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NC User enters qtester94+042011@gmail.com and +oE2JFL33Fg\u003d",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepNC.enterCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login button NC",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepNC.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to homepage NC",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepNC.verifyLogin()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/NopComerc/New Folder/Page_nopCommerce demo store/a_Log out\u0027 is present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$6.call(Unknown Source)\r\n\tat nopComerc.LoginStepNC.verifyLogin(LoginStepNC.groovy:42)\r\n\tat ✽.User is navigated to homepage NC(Include/features/NopComerc/Login.feature:7)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/NopComerc/New Folder/Page_nopCommerce demo store/a_Log out\u0027 located by \u0027//a[contains(text(),\u0027Log out\u0027)]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$6.call(Unknown Source)\r\n\tat nopComerc.LoginStepNC.verifyLogin(LoginStepNC.groovy:42)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat CucumberRunner.run(CucumberRunner:7)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1681997626710.run(TempTestCase1681997626710.groovy:25)\r\n",
  "status": "failed"
});
formatter.uri("Include/features/NopComerc/Register.feature");
formatter.feature({
  "name": "Register feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test register user with valid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \u003cfirstname\u003e, \u003clastname\u003e, \u003cemail\u003e, \u003cpassword\u003e, \u003cconfirmpassword\u003e data",
  "keyword": "When "
});
formatter.step({
  "name": "Click on the register button",
  "keyword": "And "
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmpassword"
      ]
    },
    {
      "cells": [
        "Tom",
        "Hagen",
        "qtester94+042012@gmail.com",
        "2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d",
        "2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d"
      ]
    },
    {
      "cells": [
        "Jenny",
        "Hagen",
        "qtester94+042013@gmail.com",
        "2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d",
        "2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test register user with valid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "registerStep.navigateToRegistrePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Tom, Hagen, qtester94+042012@gmail.com, 2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d, 2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d data",
  "keyword": "When "
});
formatter.match({
  "location": "registerStep.enterData(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the register button",
  "keyword": "And "
});
formatter.match({
  "location": "registerStep.clickOnRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "registerStep.verifyRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test register user with valid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "registerStep.navigateToRegistrePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Jenny, Hagen, qtester94+042013@gmail.com, 2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d, 2QpTVdkPu4NVz4sLYjnEaQ\u003d\u003d data",
  "keyword": "When "
});
formatter.match({
  "location": "registerStep.enterData(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the register button",
  "keyword": "And "
});
formatter.match({
  "location": "registerStep.clickOnRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "registerStep.verifyRegister()"
});
formatter.result({
  "status": "passed"
});
});