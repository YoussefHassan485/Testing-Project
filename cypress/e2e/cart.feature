Feature: Shopping Cart functionality on Advantage Online Shopping

  Scenario: Add an item to the cart
    Given I am on the Advantage Online Shopping homepage
    When I click on the Speakers category image
    Then I should be on the Speakers category page
    When I select a product with id "20"
    Then I should be on the product detail page
    When I add the product to the cart
    Then the item should be added to the cart

  Scenario: Remove an item from the cart
    Given I am on the Advantage Online Shopping homepage
    When I click on the Speakers category image
    Then I should be on the Speakers category page
    When I select a product with id "20"
    Then I should be on the product detail page
    When I add the product to the cart
    And I remove the product from the cart
    Then the cart should be empty or updated accordingly
