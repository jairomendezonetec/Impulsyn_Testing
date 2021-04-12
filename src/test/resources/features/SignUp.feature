Feature: Casos de prueba de SIGN UP

  @signup @signUp_001 @complete
  Scenario: SIGNUP_001 - Validación de errores en SIGNUP
    Given El usuario accede a SignUp
    When El usuario valida Sign up con errores
      | Name and surname |  |
      | Email            |  |
      | Password         |  |
    Then El usuario valida error en los siguientes campos:
      | Name and surname | error |
      | Email            | error |
      | Password         | error |
    Given El usuario valida Sign up con errores
      | Name and surname | Test         |
      | Email            | emailErroneo |
      | Password         |       123456 |
    Then El usuario valida error en los siguientes campos:
      | Name and surname |       |
      | Email            | error |
      | Password         |       |
    Given El usuario valida Sign up con errores
      | Name and surname | Test                   |
      | Email            | emailErroneo@error.com |
      | Password         |                 123456 |
    Then El usuario valida error en los siguientes campos:
      | Name and surname |       |
      | Email            |       |
      | Password         | error |
      
