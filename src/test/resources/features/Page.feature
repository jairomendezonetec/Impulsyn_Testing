Feature: Casos de prueba de POSTS

  @page_001 @page @complete @regresion
  Scenario: PAGE_001 - Validación de creación/borrado de página
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
    When El usuario accede a "Menu" desde Home
    And El usuario accede a "Create page" desde Menu
    When El usuario crea una nueva página con los siguientes datos:
      | Page type         | Sports Organization       |
      | Organization type | Club                      |
      | Name              | Test Automation Page      |
      | Tagline           | Tag Automation Page       |
      | Website           | www.TagAutomationPage.com |
    When El usuario accede a "Menu" desde Home
    When El usuario accede a "Page: Test Automation Page" desde Menu
    Then El usuario elimina la página "Test Automation Page"
