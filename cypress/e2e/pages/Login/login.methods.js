import { Logger } from '../../utils/logger';
import { LoginElements } from './login.elements';

export class LoginMethods {
  static insertUserName(username) {
    //LoginElements.textBoxes.username.type(username)
    LoginElements.textBoxes.username.invoke('val', username)
  }

  static insertPassword(password) {
    //LoginElements.textBoxes.password.type(password)
    LoginElements.textBoxes.password.invoke('val', password)
  }

  static clickOnLoginButton() {
    LoginElements.buttons.login.click()
  }

  static login(username, password) {
    Logger.subStep('Insert UserName:');
    this.insertUserName(username);
    Logger.subStep('Insert Password:');
    this.insertPassword(password);
    Logger.subStep('Click on Loggin button:');
    this.clickOnLoginButton();
  }
}