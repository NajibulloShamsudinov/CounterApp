let counter = 0;

const dec = document.getElementById("dec");
const res = document.getElementById("res");
const inc = document.getElementById("inc");
console.log("Hello, Najibullo Shamsudinov");

const result = document.getElementById("result");

function checkColor() {
  if (counter < 0) {
    result.style.color = "pink";
  } else if (counter > 0) {
    result.style.color = "green";
  } else {
    result.style.color = "yellow";
  }
}

inc.addEventListener("click", function() {
  counter++;
  result.innerHTML = counter;
  checkColor();
});
dec.addEventListener("click", function() {
  counter--;
  result.innerHTML = counter;
  checkColor();
});
res.addEventListener("click", function() {
  counter = 0;
  result.innerHTML = counter;
  checkColor();
});
function checkColor() {
  if (counter < 1) {
    result.style.color = "red";
  } else if (counter > 2) {
    result.style.color = "green";
  } else {
    result.style.color = "black";
  }
}

inc.addEventListener("click", function() {
  counter++;
  result.innerHTML = counter;
  checkColor();
});
dec.addEventListener("click", function() {
  counter--;
  result.innerHTML = counter;
  checkColor();
});
res.addEventListener("click", function() {
  counter = 3;
  result.innerHTML = counter;
  checkColor();
});
