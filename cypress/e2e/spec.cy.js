import { CartMethods } from "./pages/Cart/cart.methods"
import { LoginElements } from "./pages/Login/login.elements"
import { LoginMethods } from "./pages/Login/login.methods"
import { Logger } from "./utils/logger"

describe('template spec', () => {
  it('passes', () => {
    const user = 'random01';
    const password = 'random01';

    Logger.stepNumber(1);
    Logger.step('Navigate to DemoBlaze Page');
    cy.visit('https://demoblaze.com/');

    Logger.stepNumber(2);
    Logger.step('Click on Login link');
    cy.get('a[data-target="#logInModal"]').click();

    Logger.stepNumber(3);
    Logger.step(`Login with this credentials: ${user} | ${password}`);
    LoginMethods.login(user, password);

    Logger.verification(`The home should show: Welcome ${user}`);
    cy.get('a#nameofuser').should('contain.text', user);


    // LoginMethods.clickOnLoginButton()
    //LoginMethods.login('hola', 'hola')
    // cy.get('input#loginusername').type('hola');
    // cy.get('input#loginusername').type('hola');
   //cy.contains('button', 'Log in').click();
    //cy.wait(45000)
   // CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    //cy.wait(10000)
  })
})