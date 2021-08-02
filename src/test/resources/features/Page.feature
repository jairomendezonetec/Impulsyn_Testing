Feature: Casos de prueba de Páginas

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
    When El usuario crea un nuevo post
      | Texto | Este post es generado por pruebas automáticas en la página |
    When El usuario accede a "Post: Este post es generado por pruebas automáticas en la página" desde Profile
    Then El usuario elimina el post
    Then El usuario elimina la página

  @page_002 @page @complete
  Scenario: PAGE_002 - Validación de creación/borrado de oportunidad
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
    When El usuario accede a "Menu" desde Home
    And El usuario accede a "Create page" desde Menu
    When El usuario crea una nueva página con los siguientes datos:
      | Page type         | Sports Organization              |
      | Organization type | Club                             |
      | Name              | Test Automation Opportunity Page |
      | Tagline           | Tag Automation Opportunity Page  |
      | Website           | www.TagAutomationPage.com        |
    When El accede a "Opportunities" desde Page
    When El usuario crea una oportunidad:
      | Title                                          | QA Title                      |
      | Description                                    | Description QA of opportunity |
      | Area                                           | Sales                         |
      | Opportunity type                               | Full-Time                     |
      | Responsibilities                               | QA Responsabilities           |
      | Requirements                                   | QA requirements               |
      | Redirect the candidate to an external webpage. | true                          |
      | Website                                        | www.externalweb.com           |
    When El usuario elimina la oportunidad "QA Title"
    Then El usuario elimina la página
