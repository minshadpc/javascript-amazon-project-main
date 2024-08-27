import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { laodFromStorage,cart } from "../../data/cart.js";

describe("test suite: render OrderSummary", () => {
  it("displays the cart", () => {
    document.querySelector(".js-test-container").innerHTML = `
    <div class="js-order-summary"></div>
    `;
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionsId: "1",
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionsId: "2",
        },
      ]);
    });
    laodFromStorage();
    renderOrderSummary();

    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      2
    );
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2");
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain("Quantity: 1");
  });

  it("removes a product", () => {
    document.querySelector(".js-test-container").innerHTML = `
    <div class="js-order-summary"></div>
    <div class="js-payment-summary"></div>
    `;
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionsId: "1",
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionsId: "2",
        },
      ]);
    });
    laodFromStorage();
    renderOrderSummary();

    document.querySelector(`.js-delete-link-${productId1}`).click();

    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      0
    );
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);
    
  });
});
