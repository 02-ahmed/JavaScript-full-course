export let cart = JSON.parse(localStorage.getItem('cart')) || [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

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


    saveToStorage();
}


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((item) => {
    if (item.productId !== productId) {
      newCart.push(item)
    }
  });

  cart = newCart;

  saveToStorage();
};

export function calculateCartQuantity() {
  let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });

    return totalQuantity;
};