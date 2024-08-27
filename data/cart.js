export let cart;

laodFromStorage();

export function laodFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [
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
}

function saveToStorage(params) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let mathingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      mathingItem = cartItem;
    }
  });

  if (mathingItem) {
    mathingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionsId: "1",
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let mathingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      mathingItem = cartItem;
    }
  });

  mathingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}
