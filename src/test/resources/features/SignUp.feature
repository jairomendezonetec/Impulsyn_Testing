Feature: Casos de prueba de SIGN UP

  @signup @signUp_001 @complete
  Scenario: SIGNUP_001 - Validación de errores en SIGNUP
    Given El usuario accede a SignUp
    When El usuario valida Sign up con errores
      | Email            |  |
      | Password         |  |
    Then El usuario valida error en los siguientes campos:
      | Email            | error |
      | Password         | error |
    Given El usuario valida Sign up con errores
      | Email            | emailErroneo |
      | Password         |       123456 |
    Then El usuario valida error en los siguientes campos:
      | Email            | error |
      | Password         |       |
    Given El usuario valida Sign up con errores
      | Email            | emailErroneo@error.com |
      | Password         |                 123456 |
    Then El usuario valida error en los siguientes campos:
      | Email            |       |
      | Password         | error |
      
