export class HomeElements {
  static get categoriesMenu() {
    return {
      get phones() {
        cy.contains('a', 'Phones')
      },
      get laptops() {
        cy.contains('a', 'Laptops')
      },
      get monitors() {
        cy.contains('a', 'Monitors')
      }
    }
  }

  static product(productname) {
    return cy.contains("a", productname)
  }
}