import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.maximizeWindow()

WebUI.navigateToUrl('https://demo.nopcommerce.com/')

WebUI.click(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store/a_Register'))

WebUI.setText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_First name_FirstName'), 
    'Bob')

WebUI.setText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Last name_LastName'), 
    'Bobson')

WebUI.setText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Email_Email'), 'qtester94+042011@gmail.com')

WebUI.setEncryptedText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Password_Password'), 
    '2QpTVdkPu4NVz4sLYjnEaQ==')

WebUI.setEncryptedText(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/input_Confirm password_ConfirmPassword'), 
    '2QpTVdkPu4NVz4sLYjnEaQ==')

WebUI.click(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/button_Register'))

WebUI.verifyElementPresent(findTestObject('Object Repository/NopComerc/Page_nopCommerce demo store. Register/h1_Register'), 
    0)

WebUI.closeBrowser()

