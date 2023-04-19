Feature: Faild Login

  Scenario Outline: Test login with invalid credentials
    Given The user is on the login page
    When User enters <username> and <password>
    And Click on the login button
    Then The error message appears

    Examples: 
      | username | password |
      | Test1234 |     qiJKaxJJktI= |
