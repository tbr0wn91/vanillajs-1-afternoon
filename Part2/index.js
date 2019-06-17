let cardType = document.getElementById("cardtype");
console.log(cardType);

let style = document.getElementById("style");
console.log(style);

function setCard (){
    console.log(cardType.value);
    let card = document.getElementById(cardType.value);
    console.log(card);
    card.style.color = style.value;
    console.log(style.value);
}
// setCard();