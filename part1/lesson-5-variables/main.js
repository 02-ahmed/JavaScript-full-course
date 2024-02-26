let cartQuantity = 0;


function showQuantity(){
  console.log(`Cart quantity: ${cartQuantity}`);
}

function addToCart(){
  //improved code next day by making sure cart quantity did not exceed 10
  cartQuantity < 10 ? cartQuantity+=1 : alert('The cart is full');
  showQuantity();
}

function add2(){
  cartQuantity < 10 ? cartQuantity+=2 : alert('The cart is full');
  showQuantity();
} 

function add3(){
  cartQuantity < 10 ? cartQuantity+=3 : alert('The cart is full');
  showQuantity();
}

function reset(){
  cartQuantity = 0;
  console.log('Cart was reset.')
  showQuantity();
}

function remove(){
  cartQuantity > 0 ? cartQuantity-=1 : alert('Not enough items in the cart');
  showQuantity();
}

function remove2(){
  cartQuantity >= 2 ? cartQuantity-=2 : alert('Not enough items in the cart');
  showQuantity();
}

function remove3(){
  cartQuantity >= 3 ? cartQuantity-=3 : alert('Not enough items in the cart');
  showQuantity();
}



/* function add(){
  if (buttonText === "Add to cart"){
    cartQuantity+=1;
  }else if(buttonText === "+2"){
    cartQuantity +=2;
  }else if(buttonText === "+3"){
    cartQuantity +=3;
  }else if(buttonText === "Reset Cart"){
    cartQuantity = 0;
  }

  showQuantity();
} */