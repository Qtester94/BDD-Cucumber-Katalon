Feature: Register feature

  Scenario Outline: Test register user with valid data
    Given The user is on the register page
    When User enters <firstname>, <lastname>, <email>, <password>, <confirmpassword> data
    And Click on the register button
    Then User is logged in

    Examples: 
      | firstname | lastname | email                      | password                 | confirmpassword          |
      | Tom       | Hagen    | qtester94+042012@gmail.com | 2QpTVdkPu4NVz4sLYjnEaQ== | 2QpTVdkPu4NVz4sLYjnEaQ== |
      | Jenny     | Hagen    | qtester94+042013@gmail.com | 2QpTVdkPu4NVz4sLYjnEaQ== | 2QpTVdkPu4NVz4sLYjnEaQ== |
