import { LoginElements } from './login.elements';

export class LoginMethods {
  static insertUserName(username) {
    LoginElements.textBoxes.username.type(username)
  }

  static insertPassword(password) {
    LoginElements.textBoxes.password.type(password)
  }

  static clickOnLoginButton() {
    LoginElements.buttons.login.click()
  }
}