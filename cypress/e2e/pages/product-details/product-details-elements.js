export class ProductsDetailsElements {
  static get buttons() {
    return {
      get addToCart() {
        cy.contains('a', 'Add to cart') //revisar si necesita un return
      }
    }
  }

}
