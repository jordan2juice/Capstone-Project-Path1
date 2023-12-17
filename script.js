// Copyright Year Auto-Update
copyright = document.querySelector("#copyright");
copyright.appendChild(document.createTextNode(new Date().getFullYear()));

function changeQuoteToAqua() {
  let quote = document.querySelector("#quote");
  quote.style.color = "aqua";
  console.log("in change quote");
}

// let quoteBtn = document.querySelector("#quote-button");
// quoteBtn.onclick = changeQuoteToAqua;

changeQuoteToAqua ()

function validate() {
  let inputs;
  inputs = document.querySelectorAll("form input");
  for (input of inputs) {
    if (input.value === "") {
      input.style.background = "#E0FFFF";
    } else {
      input.style.background = "#AFEEEE";
    }
  }
}

btnSubmit = document.querySelector("#my-button");
btnSubmit.onclick = validate;
