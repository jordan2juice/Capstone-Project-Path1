// Copyright Year Auto-Update
copyright = document.querySelector("#copyright");
copyright.appendChild(document.createTextNode(new Date().getFullYear()));

function changeQuoteToAqua() {
  let quote = document.querySelector("#quote");
  quote.style.color = "aqua";
  console.log("in change quote");
}

changeQuoteToAqua();
