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