import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import "../data/cart-class.js";
//import '../data/backend-practice.js'

async function laodPage() {
  console.log("laod page");

  laod

}
laodPage().then(() => {
  console.log("next page");
});

import { loadProducts } from "../data/products.js";
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
