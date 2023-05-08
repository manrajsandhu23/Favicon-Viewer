const inputLink = document.getElementById("link");
const submit = document.getElementById("btnSub");
const output = document.getElementById("fimg");

function clickHandler() {
  let domain = inputLink.value;
  console.log(domain);
  const favicon = `https://www.google.com/s2/favicons?sz=32&domain_url=${domain}`;
  console.log("btn clicked");
  output.src = favicon;
}

submit.addEventListener("click", clickHandler);
