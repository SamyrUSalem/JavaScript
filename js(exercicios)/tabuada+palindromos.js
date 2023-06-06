const number = prompt("Qual número vc escolher? ");
let i = 1;
let strnumber = "";
for (i; i <= 20; i++) {
    strnumber += "\n. " + number + " x " + i + " = " + number * i;
}

alert("Resultado: " + strnumber);


const word = prompt("Qual seria a palavra? ");
let reverse = "";

for (let ii = word.length - 1; ii >= 0; ii--) {
    reverse += word[ii];
}

if (word === reverse) {
    alert("È um palíndromo");
} else {
    alert("A palavra " + word + ", é diferente da palavra " + reverse);
}
