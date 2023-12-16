// Copyright Year Auto-Update
copyright = document.querySelector("#copyright");
copyright.appendChild(document.createTextNode(new Date().getFullYear()));

function changeQuoteToAqua() {
  let quote = document.querySelector("#quote");
  quote.style.color = "aqua";
  console.log("in change quote");
}

let quoteBtn = document.querySelector("#quote-button");
quoteBtn.onclick = changeQuoteToAqua;

// function validation() {
//   let inputs;
//   inputs = document.querySelectorAll("form input");
//   for (input of inputs) {
//     if (input.value === "") {
//       input.style.color = "lime";
//     } else {
//       input.style.color = "#191970";
//     }
//   }
// }
