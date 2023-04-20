Feature: Login feature NC

  Scenario Outline: Test login with valid credentials NC
    Given The user is on the login page NC
    When NC User enters <username> and <password>
    And Click on the login button NC
    Then User is navigated to homepage NC

    Examples: 
      | username                | password     |
      | qtester94+042011@gmail.com           | +oE2JFL33Fg= |
    
