Feature: Login feature for NopComerc

  Scenario Outline: Test login with valid credentials
    Given The user is on the login page NC
    When User enters <username> and <password> NC
    And Click on the login button NC
    Then User is navigated to homepage NC

    Examples: 
      | username                   | password     |
      | qtester94+042011@gmail.com | +oE2JFL33Fg= |
