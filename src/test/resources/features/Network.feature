Feature: Casos de prueba de Relación de usuarios

  Background: Verificar usuario desconectado de la red de contactos
    Given El usuario hace Log In
      | Email       | jairo.mendez@grupoonetec.com |
      | Password    | -Acceso01                    |
      | Remember me | false                        |
    When El usuario accede a "Networking" desde Home
    Then El usuario accede a "Manage my network"
    Then El usuario verifica el contacto "Jenkins Onetec" ha sido borrado

  @network_001 @network
  Scenario: NETWORK_001 - Validación de creación de post (Texto)
    When El usuario busca "Jenkins Onetec"
    And El usuario conecta con el contacto
    When El usuario hace Log out
    Given El usuario valida Log in
      | Email    | jenkins@grupoonetec.com |
      | Password | -Acceso01               |
    When El usuario accede a "Notifications" desde Home
    When El usuario accede a la notificación "Jairo Mendez Martin invited you to connect"
    And El usuario acepta la notificación
    When El usuario hace Log out
    Given El usuario valida Log in
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
    When El usuario accede a "Networking" desde Home
    Then El usuario accede a "Manage my network"
    Then El usuario verifica el contacto "Jenkins Onetec"
    Then El usuario elimina el contacto "Jenkins Onetec"
