let maVariable = document.getElementsByTagName('p');

function randomNumber() {
    return Math.trunc(Math.random() * 100);
}

let i = 1;
while(i < 10) {
    maVariable[i].innerHTML = randomNumber().toString();
    i++;
}