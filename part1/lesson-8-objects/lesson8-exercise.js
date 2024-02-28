let amount = 2095;
const product = {
  name : 'basketball' ,
  price : `${amount} cents` ,
}
console.log(product);

//=============================
product.price = `${amount + 500} cents`;
console.log(product);