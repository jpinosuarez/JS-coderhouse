// Contador adultos

let contadorAdultos = document.getElementById('contadorAdultos');
contadorAdultos.innerHTML = 2;

let btnSumaAdultos = document.getElementById('sumaAdultos');
btnSumaAdultos.addEventListener('click', sumarAdultos);

let btnRestaAdultos = document.getElementById('restaAdultos');
btnRestaAdultos.addEventListener('click', restarAdultos)

function sumarAdultos() {
    if ((contadorAdultos.innerHTML) < 6) {
        contadorAdultos.innerHTML++;
    }
}

function restarAdultos() {
    if ((contadorAdultos.innerHTML) > 1) {
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

function sumarMenores() {
    if ((contadorMenores.innerHTML) < 6) {
        contadorMenores.innerHTML++;
    }
}

function restarMenores() {
    if ((contadorMenores.innerHTML) > 0) {
        contadorMenores.innerHTML--;
    }
}


let btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', storageData);

// =========================================================
// JQuery UI Datepicker

$(()=> {
    $("#checkIn").datepicker({
        minDate: 0,
        maxDate: '+1Y+6M',
        dateFormat: "dd-mm-yy",
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Sábado", "Domingo"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        onSelect: function (dateStr) {
            let min = $(this).datepicker('getDate');
            $("#checkOut").datepicker('option', 'minDate', min || '0');
        }
    });

    $("#checkOut").datepicker({
        minDate: '0',
        maxDate: '+1Y+6M',
        dateFormat: "dd-mm-yy",
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Sábado", "Domingo"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        onSelect: function (dateStr) {
            let max = $(this).datepicker('getDate');
            $('#datepicker').datepicker('option', 'maxDate', max || '+1Y+6M');
            let inicio = $("#checkIn").datepicker("getDate");
            let fin = $("#checkOut").datepicker("getDate");
            let dias = (fin - inicio) / (1000 * 60 * 60 * 24);
            sessionStorage.setItem('dias', dias)
        }
    });
});
// ==========================

function storageData() {
    sessionStorage.setItem('adultos', contadorAdultos.innerHTML);
    sessionStorage.setItem('menores', contadorMenores.innerHTML);
}