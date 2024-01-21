let Array = [
    {
        savol: "Dasturiy ta'minot inqirozining asosiy sababi nima?",
        javob:"hisoblash quvvatining keskin oshishi",
        njavob1: "dasturlashning keskin o'sishi",
        njavob2: "kompyuterlar narxining keskin oshishi",
        njavob3:"xarajatlarni kamaytirish kompyuterlar"
    },
    {
        savol: "Dasturiy ta'minot kompaniyasi tomonidan yaratilgan va ochiq dasturiy ta'minot bozorida sotiladigan mustaqil dasturiy mahsulotlarning nomlari qanday? ",
        javob: "umumiy dasturiy mahsulotlar haqida",
        njavob1: "maxsus dasturiy mahsulotlar ",
        njavob2: "OS ",
        njavob3: "Axborot tizimlari ",
    },
    {
        savol:" Qaysi modelda prototiplar yaratilgan - yaratilayotgan dasturiy mahsulotning qisman funksionalligini amalga oshiradigan dasturlar ?",
        javob: "Spiral model",
        njavob1: "Iterativ model",
        njavob2: "Evolyutsion yondashuv",
        njavob3: "Kaskad yondashuvi"
    },
    {
        savol: "1Dasturiy ta'minot inqirozining asosiy sababi nima?",
        javob:"hisoblash quvvatining keskin oshishi",
        njavob1: "dasturlashning keskin o'sishi",
        njavob2: "kompyuterlar narxining keskin oshishi",
        njavob3:"xarajatlarni kamaytirish kompyuterlar"
    },
    {
        savol: "1Dasturiy ta'minot kompaniyasi tomonidan yaratilgan va ochiq dasturiy ta'minot bozorida sotiladigan mustaqil dasturiy mahsulotlarning nomlari qanday? ",
        javob: "umumiy dasturiy mahsulotlar haqida",
        njavob1: "maxsus dasturiy mahsulotlar ",
        njavob2: "OS ",
        njavob3: "Axborot tizimlari ",
    },
    {
        savol:"1 Qaysi modelda prototiplar yaratilgan - yaratilayotgan dasturiy mahsulotning qisman funksionalligini amalga oshiradigan dasturlar ?",
        javob: "Spiral model",
        njavob1: "Iterativ model",
        njavob2: "Evolyutsion yondashuv",
        njavob3: "Kaskad yondashuvi"
    }
    
]

let savolObj = Array[Math.floor(Math.random()*4)]


console.log(savolObj);

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


savol.innerHTML = savolObj.savol;
vareantlar1.innerHTML = savolObj.javob;
vareantlar2.innerHTML = savolObj.njavob1;
vareantlar3.innerHTML = savolObj.njavob2;
vareantlar4.innerHTML = savolObj.njavob3;

let button = document.querySelectorAll('button');
button.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(button.innerText == savolObj.javob){
            button.style.backgroundColor = 'blue';
        }
        console.log(savolObj.javob)
        console.log(button.innerText)
    })
})
