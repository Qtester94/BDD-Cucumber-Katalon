Feature: Login feature

  Scenario Outline: Test login with valid credentials
    Given The user is on the login page
    When User enters <username> and <password>
    And Click on the login button
    Then User is navigated to homepage

    Examples: 
      | username                | password     |
      | standard_user           | qcu24s4901FyWDTwXGr6XA== |
      | problem_user            | qcu24s4901FyWDTwXGr6XA== |
      | performance_glitch_user | qcu24s4901FyWDTwXGr6XA== |
