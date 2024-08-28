import { addToCart, cart } from "./cart.js";

function Cart(localStorageKey) {
  const cartItems = {
    cartItems: undefined,
    laodFromStorage: function () {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionsId: "1",
          },
          {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionsId: "2",
          },
        ];
      }
    },
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
    addToCart(productId) {
      let mathingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          mathingItem = cartItem;
        }
      });

      if (mathingItem) {
        mathingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionsId: "1",
        });
      }
      this.saveToStorage();
    },
    removeFromCart(productId) {
      const newCart = [];

      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });

      this.cartItems = newCart;
      this.saveToStorage();
    },
    updateDeliveryOption(productId, deliveryOptionId) {
      let mathingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          mathingItem = cartItem;
        }
      });

      mathingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
    },
  };
  return cart;
}

//cartItems.laodFromStorage();