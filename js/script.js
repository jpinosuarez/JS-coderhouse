let dias = document.getElementById('dias');


// ================================
// Contador adultos

let contadorAdultos = document.getElementById('contadorAdultos');
contadorAdultos.innerHTML = 2;

let btnSumaAdultos = document.getElementById('sumaAdultos');
btnSumaAdultos.addEventListener('click', sumarAdultos);

let btnRestaAdultos = document.getElementById('restaAdultos');
btnRestaAdultos.addEventListener('click', restarAdultos)

function sumarAdultos(){
    if ((contadorAdultos.innerHTML)<6) {
        contadorAdultos.innerHTML++;
    }
}

function restarAdultos(){
    if ((contadorAdultos.innerHTML)>1) {
        contadorAdultos.innerHTML--;
    }
}


// ================================
// Contador menores

let contadorMenores = document.getElementById('contadorMenores');
contadorMenores.innerHTML = 0;

let btnSumaMenores = document.getElementById('sumaMenores');
btnSumaMenores.addEventListener('click', sumarMenores);

let btnRestaMenores = document.getElementById('restaMenores');
btnRestaMenores.addEventListener('click', restarMenores)

function sumarMenores(){
    if ((contadorMenores.innerHTML)<6) {
        contadorMenores.innerHTML++;
    }
}

function restarMenores(){
    if ((contadorMenores.innerHTML)>0) {
        contadorMenores.innerHTML--;
    }
}


let btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', storageData);

function storageData(){
    sessionStorage.setItem('adultos', contadorAdultos.innerHTML);
    sessionStorage.setItem('menores', contadorMenores.innerHTML);
    sessionStorage.setItem('dias', dias.value);
}