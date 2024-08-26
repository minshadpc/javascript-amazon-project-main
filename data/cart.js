export const cart = [];

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
    });
  }
}
