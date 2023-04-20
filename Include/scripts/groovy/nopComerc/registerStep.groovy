package nopComerc
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class registerStep {
	
	@Given ("The user is on the register page")
	def navigateToRegistrePage() {
		WebUI.openBrowser('')
		WebUI.maximizeWindow()
		WebUI.navigateToUrl('https://demo.nopcommerce.com/')
		WebUI.click(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store/a_Register'))
		
	}

	@When ("User enters (.*), (.*), (.*), (.*), (.*) data")
	def enterData(String firstname, String lastname, String email, String password, String confirmepassword) {
		WebUI.setText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_First name_FirstName'),
			firstname)
		
		WebUI.setText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Last name_LastName'),
			lastname)
		
		WebUI.setText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Email_Email'), email)
		
		WebUI.setEncryptedText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Password_Password'),
			password)
		
		WebUI.setEncryptedText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Confirm password_ConfirmPassword'),
			confirmepassword)
	}
	
	@And ("Click on the register button")	
	def clickOnRegisterButton() {
		WebUI.click(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/button_Register'))
	}
	
	@Then ("User is logged in")
	def verifyRegister () {
		WebUI.verifyElementPresent(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/h1_Register'),
			0)
				WebUI.closeBrowser()
	}
}