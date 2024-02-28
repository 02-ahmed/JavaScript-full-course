let amount = 2095;
const product = {
  name : 'basketball' ,
  price : 2095 ,

}
console.log(product);

//=============================
product.price += 500;
console.log(product);

//================================
product['delivery-time'] = '3 days';
console.log(product);

//================================

const product1 = {
  name: 'noodles' ,
  price: 10 ,
}
const product2 = {
  name: 'spaghetti' ,
  price: 5 ,
}

console.log(comparePrice(product1, product2));


function comparePrice(product1, product2) {
  if (product1.price > product2.price) {
    return product2
  }else {
    return product1
  }
}

function isSameProduct(product1, product2) {
  if (product1.name === product2.name && product1.price === product2.price) {
    return true
  }else {
    return false
  }
}

console.log(isSameProduct(product1, product2));