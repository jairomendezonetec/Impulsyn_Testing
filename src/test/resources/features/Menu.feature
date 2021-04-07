Feature: Casos de prueba de MENU

  @menu_001 @menu @complete
  Scenario: MENU_001 - Validación de pantalla menu
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | Acceso01                     |
    When El usuario accede a "Menu" desde Home
    Then El usuario tiene las siguientes acciones en el Menu:
      | Who viewed my profile |
      | Settings              |
      | FAQs                  |
      | View your profile     |
      | Create page           |

  @menu_002 @menu @complete
  Scenario: MENU_002 - Validación de pantalla Settings
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | Acceso01                     |
    When El usuario accede a "Menu" desde Home
    When El usuario accede a "Settings" desde Menu
    Then El usuario tiene las siguientes acciones en Settings:
      #| Language        |
      | Change password |
      | Edit profile    |
      | Privacy         |
      #| Notifications   |
      | Log out         |
