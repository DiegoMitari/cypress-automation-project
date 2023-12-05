import { signUpElements } from './signup.elements';

export class signUpMethods {
  static insertUserName(username) {
    signUpElements.textBoxes.username.invoke('val', username)
  }

  static insertPassword(password) {
    signUpElements.textBoxes.password.invoke('val', password)
  }

  static clickOnSignUpButton() {
    signUpElements.buttons.signup.click();
  }

  static signup(username, password) {
    this.insertUserName(username);
    this.insertPassword(password);
    this.clickOnSignUpButton()
  }
}