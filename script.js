// Copyright Year Auto-Update
copyright = document.querySelector("#copyright");
copyright.appendChild(document.createTextNode(new Date().getFullYear()));

let titles = document.querySelectorAll ("h2")
function changeQuoteToAqua() {
    for (elm of titles);
    titles.style.color = "aqua";
}

changeQuoteToAqua ()