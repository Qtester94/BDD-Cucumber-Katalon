package nopComerc
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class LoginStepNC {

	@Given ("The user is on the login page NC")
	def navigateToLoginPage () {
		WebUI.openBrowser('')
		WebUI.maximizeWindow()
		WebUI.navigateToUrl('https://demo.nopcommerce.com/')
		WebUI.click(findTestObject('Object Repository/NopComerc/New Folder/Page_nopCommerce demo store/a_Log in'))
	}

	@When ("NC User enters (.*) and (.*)")
	def enterCredentials(String username, String password) {
		WebUI.click(findTestObject('NopComerc/New Folder/Page_nopCommerce demo store. Login/input_Email_Email'), FailureHandling.STOP_ON_FAILURE)

		WebUI.setText(findTestObject('Object Repository/NopComerc/New Folder/Page_nopCommerce demo store. Login/input_Email_Email'), 
			username)

		WebUI.setEncryptedText(findTestObject('Object Repository/NopComerc/New Folder/Page_nopCommerce demo store. Login/input_Password_Password'), 
			password)
	}

	@And ("Click on the login button NC")
	def clickLoginButton() {
		WebUI.click(findTestObject('Object Repository/NopComerc/New Folder/Page_nopCommerce demo store. Login/button_Log in'))
	}

	@Then ("User is navigated to homepage NC")
	def verifyLogin() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/NopComerc/New Folder/Page_nopCommerce demo store/a_Log out'),
				0)

		WebUI.verifyElementPresent(findTestObject('Object Repository/NopComerc/New Folder/Page_nopCommerce demo store/a_My account'),
				0)

		WebUI.closeBrowser()
	}
}