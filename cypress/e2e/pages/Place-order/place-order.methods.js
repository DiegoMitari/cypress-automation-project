import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods {
  static insertName(name) {
    PlaceOrderElements.textboxes.name.invoke('val', name)
  }

  static insertCountry(country) {
    PlaceOrderElements.textboxes.country.invoke('val', country)
  }

  static insertCity(city) {
    PlaceOrderElements.textboxes.city.invoke('val', city)
  }
}