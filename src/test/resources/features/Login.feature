Feature: Casos de prueba de LOG IN

  @login @login_001 @complete @regresion
  Scenario: LOGIN_001 - Validación de errores en LOGIN
    Given El usuario accede a Log In
    When El usuario valida Log in con errores
      | Email    |  |
      | Password |  |
    Then El usuario valida error en los siguientes campos:
      | Email    | error |
      | Password | error |
    When El usuario valida Log in con errores
      | Email    | emailErroneo |
      | Password |       123456 |
    Then El usuario valida error en los siguientes campos:
      | Email    | error |
      | Password |       |
    When El usuario valida Log in con errores
      | Email    | emailErroneo@error.com |
      | Password |                 123456 |
    Then El usuario valida error en los siguientes campos:
      | Email    |       |
      | Password | error |

  @login @login_002 @complete
  Scenario: LOGIN_002 - Validación de LOGOUT
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
    Then El usuario hace Log out

  @login @login_003 @complete @regresion
  Scenario: LOGIN_003 - Validación de Recordar password
    Given El usuario hace Log In
      | Email       | jairo.mendez@grupoonetec.com |
      | Password    | -Acceso01                    |
      | Remember me | true                         |
    And El usuario accede a la home
    When El usuario hace Log out
    Then El usuario pulsa sobre login sin rellenar los campos
    Then El usuario accede a la home

  @login @login_004 @complete
  Scenario: LOGIN_004 - Validación de NO recordar password
    Given El usuario hace Log In
      | Email       | jairo.mendez@grupoonetec.com |
      | Password    | -Acceso01                    |
      | Remember me | false                        |
    And El usuario accede a la home
    When El usuario hace Log out
    Then El usuario pulsa sobre login sin rellenar los campos
    And El usuario valida Log in
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
