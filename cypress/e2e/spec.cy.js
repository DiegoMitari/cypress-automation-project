import { LoginElements } from "./pages/Login/login.elements"
import { LoginMethods } from "./pages/Login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    // LoginMethods.insertUserName('hola')
    // LoginMethods.insertPassword('hola')
    // LoginMethods.clickOnLoginButton()
    LoginMethods.login('hola', 'hola')
    // cy.get('input#loginusername').type('hola');
    // cy.get('input#loginusername').type('hola');
    // cy.contains('button', 'Log in').click();
  })
})