Feature: Casos de prueba de Oportunidades

  Background: Verificar página de oportunidad borrada
    Given El usuario hace Log In
      | Email       | jairo.mendez@grupoonetec.com |
      | Password    | -Acceso01                    |
      | Remember me | false                        |
    When El usuario accede a "Menu" desde Home
    Then El usuario verifica la página "Test Automation Opportunity Page" ha sido borrada

  @opportunitie_001 @opportunitie
  Scenario: OPPORTUNITIE_001 - Validación de solicitud de oportunidad
    Given El usuario accede a "Create page" desde Menu
    When El usuario crea una nueva página con los siguientes datos:
      | Page type         | Sports Organization              |
      | Organization type | Club                             |
      | Name              | Test Automation Opportunity Page |
      | Tagline           | Tag Automation Opportunity Page  |
      | Website           | www.TagAutomationPage.com        |
    When El accede a "Opportunities" desde Page
    When El usuario crea una oportunidad:
      | Title                                      | QA Title                      |
      | Description                                | Description QA of opportunity |
      | Area                                       | Sales                         |
      | Opportunity type                           | Full-Time                     |
      | Responsibilities                           | QA Responsabilities           |
      | Requirements                               | QA requirements               |
      | Let the candidates apply through Impulsyn. | true                          |
      | Email                                      | jairo.mendez@grupoonetec.com  |
    And El usuario vuelve a la home "app-organization-profile"
    When El usuario accede a "Opportunities" desde Home
    When El usuario busca "QA Title" en Opportunities
    And El usuario solicita la oportunidad
    And El usuario vuelve a la home "app-search"
    Then El usuario accede a "My opportunities"
    Then El usuario verifica la oportunidad "QA Title"
    When El usuario accede a "Menu" desde Home
    And El usuario accede a "Page: Test Automation Opportunity Page" desde Menu
    Then El usuario elimina la página