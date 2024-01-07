import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements"

export class ThankYouForYourPurchaseMethods {
  static clickOnOKbutton() {
    ThankYouForYourPurchaseElements.buttons.ok.click();
  }

  static verifyGreenCheckMarkIsDisplayed() {
    ThankYouForYourPurchaseElements.icons.greenCheckMark.should('exist');
  }
}