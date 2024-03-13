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

let timeoutId;

function addToCart() {
  document.querySelector(".js-cart-message").innerHTML = "Added";
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function(){
    document.querySelector(".js-cart-message").innerHTML = "";
  }, 5000);
}

document.title = "App";



setInterval(function() {
  changeTitle();
}, 1000)


let messages = 2;
function changeTitle() {
  if (document.title === "App") {
    document.title = `(${messages}) New Messages`
  }else {
    document.title = "App"
  }
}