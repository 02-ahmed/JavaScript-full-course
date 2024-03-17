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

runTwice(() => console.log('12b')
)

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

  timeoutId = setTimeout(() => {
    document.querySelector(".js-cart-message").innerHTML = "";
  }, 5000);
}

document.title = "App";



setInterval(() => {
  changeTitle();
}, 1000)

let messages = JSON.parse(localStorage.getItem('messages'))|| 2;

function changeTitle() {
  
  if (messages < 0) {
    messages=0;
  }

  if (document.title === "App" && messages!==0) {
    document.title = `(${messages}) New Messages`
  }else {
    document.title = "App"
  }

  localStorage.setItem("messages", JSON.stringify(messages));
}