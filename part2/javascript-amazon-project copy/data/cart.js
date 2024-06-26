export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId:'1',
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2',
  }];
}


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

    let quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    let quantity = Number(quantitySelector.value);
    

    if (matchingItem) {
      matchingItem.quantity+=quantity;
      console.log(matchingItem)
    }else {
      cart.push({
        productId,
        quantity,
        deliveryOptionId: '1',
      });
    }


    saveToStorage();
};


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

export function updateQuantity(productId, newQuantity) {
  cart.forEach((product) => {
    if (productId === product.productId) {
      product.quantity = newQuantity
    }
    saveToStorage();
  });
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    }); 

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}