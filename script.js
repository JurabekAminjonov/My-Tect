const savollar = {
    savol:"kim qachon o'lgan",
    vareant:"qachondir",
    vareant1:"kim qachondir",
    vareant2:"kelasi zamon",
    javob:"savol xato"
}




let uniqueNumbers = [];
for (let i = 0; i < 4; i++) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 4);
    } while (uniqueNumbers.includes(randomNumber));
    uniqueNumbers.push(randomNumber);
    // console.log(randomNumber);
}

let a = uniqueNumbers[0];
let b = uniqueNumbers[1];
let c = uniqueNumbers[2];
let d = uniqueNumbers[3];


let savol = document.querySelector('#savol');   
let vareantlar1 = document.getElementsByClassName('javoblar-item')[a];
let vareantlar2 = document.getElementsByClassName('javoblar-item')[b];
let vareantlar3 = document.getElementsByClassName('javoblar-item')[c];
let vareantlar4 = document.getElementsByClassName('javoblar-item')[d];

savol.innerHTML = savollar.savol;
vareantlar1.innerHTML = savollar.vareant
vareantlar2.innerHTML = savollar.vareant1
vareantlar3.innerHTML = savollar.vareant2
vareantlar4.innerHTML =savollar.javob
let button = document.querySelectorAll('button');

button.forEach((butoon) => {
    butoon.addEventListener('click', ()=>{
        if(butoon.innerText == savollar.javob){
            butoon.style.backgroundColor = 'rgb(50, 206, 19)'
        }
        else{
            butoon.style.backgroundColor = 'red'
        }
    })
});
