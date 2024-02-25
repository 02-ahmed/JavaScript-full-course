let cartQuantity = 0;


function showQuantity(){
  console.log(`Cart quantity: ${cartQuantity}`);
}

function addToCart(){
  cartQuantity+=1;
  showQuantity();
}

function add2(){
  cartQuantity+=2;
  showQuantity();
} 

function add3(){
  cartQuantity += 3;
  showQuantity();
}

function reset(){
  cartQuantity = 0;
  console.log('Cart was reset.')
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