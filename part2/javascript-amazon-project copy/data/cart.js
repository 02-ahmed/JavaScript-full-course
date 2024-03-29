export const cart = [];

export function addToCart(productId) {
  let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    }); 

    let quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
    let quantity = parseInt(quantitySelector.value)

    if (matchingItem) {
      matchingItem.quantity+=quantity;
      console.log(matchingItem)
    }else {
      cart.push({
        productId,
        quantity,
      });
    }
}
