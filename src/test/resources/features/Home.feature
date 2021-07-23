Feature: Casos de prueba de HOME

  @home @home_001 @complete
  Scenario: HOME_001 - Validación de pantalla home
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                     |
    Then El usuario tiene las siguientes acciones en la home:
      | Home          |
      | Networking    |
      | Opportunities |
      | Notifications |
      | Academics     |
      | Search        |
      | Message       |
      | Menu          |
