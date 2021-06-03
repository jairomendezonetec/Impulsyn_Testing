Feature: Casos de prueba de Relación de usuarios

  @network_001 @network
  Scenario: NETWORK_001 - Validación de creación de post (Texto)
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
    When El usuario busca "Jenkins QA"
    And El usuario conecta con el contacto
       When El usuario hace Log out
      Given El usuario hace Log In
      | Email    | jenkins@grupoonetec.com |
      | Password | -Acceso01                    |
    When El usuario accede a "Notifications" desde Home
    When El usuario accede a la notificación "Jairo Mendez quiere ser tu contacto"
       When El usuario hace Log out
     Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
      When El usuario accede a "Networking" desde Home
    Then El usuario accede a "Manage my network"
    Then El usuario verifica el contacto "Jairo Mendez"
