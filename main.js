const inputLink = document.getElementById("input-link");
const submit = document.getElementById("btn-sub");
const output = document.getElementById("fav-img");
console.log(output);
function clickHandler() {
  const domain = inputLink.value;
  const favicon = `https://www.google.com/s2/favicons?sz32&domain_url=${domain}`;
  console.log("btn clicked");
  output.src = favicon;
}

function keyHandler(e) {
  if (e.keyCode == 13) {
    clickHandler();
  }
}

submit.addEventListener("click", clickHandler);
document.addEventListener("keydown", keyHandler);
