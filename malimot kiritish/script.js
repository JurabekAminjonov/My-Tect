let yuborish = document.querySelector('#yuborish');
let malumot = document.querySelector('#kirish');

yuborish.addEventListener('click', () => {
    let newMalumot = malumot.value;
    console.log(newMalumot);
    console.log('tugma bosildi');
    
    let indexes = [];
    let index = newMalumot.indexOf('+');

    while (index !== -1) {
        indexes.push(index);
        index = newMalumot.indexOf('+', index + 1);
    }

    console.log(indexes);

    let newstirin =  newMalumot.slice(indexes[0]+1, indexes[1]);
    console.log(newstirin)
});
