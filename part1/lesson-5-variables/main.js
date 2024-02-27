let cartQuantity = 0;

function updateCartQuantity(button){
  if (button === 'show quantity') {
    showQuantity();
  }else if(button > 0){
    cartQuantity < 10 ? cartQuantity+=button : alert('The cart is full');
    showQuantity();
  }else if (button < 0){
    cartQuantity > 0 ? cartQuantity-=(-button): alert('Not enough items in cart');
    showQuantity();
  }else if(button === 'reset') {
    cartQuantity = 0;
    alert('Cart was reset');
    console.log('Cart was reset.');
    showQuantity();
  }
}

function showQuantity(){
  console.log(`Cart quantity: ${cartQuantity}`);
}


