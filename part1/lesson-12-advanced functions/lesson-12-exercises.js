let add = function() {
  console.log(2+3);
}

add();
add();

console.log("========12b=======")

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b')
})

runTwice(add)

function finished() {
  document.querySelector(".js-start-button").innerHTML = "Finished!";
}

function loading() {
  document.querySelector(".js-start-button").innerHTML = "Loading...";
}

function addToCart() {
  document.querySelector(".js-cart-message").innerHTML = "Added";
  setTimeout(function(){
    document.querySelector(".js-cart-message").innerHTML = "";
  }, 2000);
}