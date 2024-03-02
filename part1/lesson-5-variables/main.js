let cartQuantity = 0;
showQuantity();

function updateCartQuantity(button){
  if (button === 'show quantity') {
    showQuantity();
  }else if(button > 0){
    cartQuantity < 10 ? cartQuantity+=button : alert('The cart is full');
    showQuantity();
    return;
  }else if (button < 0){
    cartQuantity > 0 ? cartQuantity-=(-button): alert('Not enough items in cart');
    showQuantity();
    return;
  }else if(button === 'reset') {
    cartQuantity = 0;
    alert('Cart was reset');
    showQuantity();
  }
}

function showQuantity(){
  document.querySelector('.js-quantity-display').innerHTML = `Cart quantity: ${cartQuantity}`;
}


