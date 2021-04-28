Feature: Casos de prueba de POSTS

  @post_001 @post @complete
  Scenario: POST_001 - Validación de creación de post (Texto)
    Given El usuario hace Log In
      | Email    | jairo.mendez@grupoonetec.com |
      | Password | -Acceso01                    |
    When El usuario accede a "Menu" desde Home
    And El usuario accede a "View profile" desde Menu
    When El usuario crea un nuevo post
      | Texto | Este post es generado por pruebas automáticas |
    When El usuario accede a "Post: Este post es generado por pruebas automáticas" desde Profile
    Then El usuario elimina el post
