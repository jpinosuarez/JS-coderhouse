// Objetos

class Habitacion {
    constructor (nombre,descripcion,info,precio, tipo){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.info=info;
        this.precio=precio;
        this.tipo=tipo;
    }
    sumarIva(){
        this.precio=this.precio*1.21;
    }
    mostrarDatos(){
        console.log("La "+this.nombre+" tiene una capacidad de "+this.capacidad+" persona/s, y cuesta $"+this.precio+" por día (IVA incluido).");
    }
}

const habitacionSimpleClasica = new Habitacion ("Habitación Simple Clásica","descripcion","info",5000,"simpleClasica");
const habitacionDobleClasica = new Habitacion ("Habitación Doble Clásica","descripcion","info",6000,"dobleClasica");
const habitacionCuadrupleClasica = new Habitacion ("Habitacion Cuádruple Clásica","descripcion","info",7000,"cuadrupleClasica");
const habitacionFamiliarClasica = new Habitacion ("Habitación Familiar Clásica","descripcion","info",8000,"familiarClasica");

const habitacionSimpleMaster = new Habitacion ("Habitación Simple Master","descripcion","info",5500,"simpleMaster");
const habitacionDobleMaster = new Habitacion ("Habitación Doble Master","descripcion","info",6500,"dobleMaster");
const habitacionCuadrupleMaster = new Habitacion ("Habitacion Cuádruple Master","descripcion","info",7500,"cuadrupleMaster");
const habitacionFamiliarMaster = new Habitacion ("Habitación Familiar Master","descripcion","info",8500,"familiarMaster");

const habitacionSimpleDeluxe = new Habitacion ("Habitación Simple Deluxe","descripcion","info",5500,"simpleDeluxe");
const habitacionDobleDeluxe = new Habitacion ("Habitación Doble Deluxe","descripcion","info",6500,"dobleDeluxe");
const habitacionCuadrupleDeluxe = new Habitacion ("Habitacion Cuádruple Deluxe","descripcion","info",7500,"cuadrupleDeluxe");
const habitacionFamiliarDeluxe = new Habitacion ("Habitación Familiar Deluxe","descripcion","info",8500,"familiarDeluxe");


// arrays habitaciones por tipo

const habitacionesSimples = [habitacionSimpleClasica, habitacionSimpleMaster, habitacionSimpleDeluxe];
const habitacionesDobles = [habitacionDobleClasica, habitacionDobleMaster, habitacionDobleDeluxe];
const habitacionesCuadruples = [habitacionCuadrupleClasica, habitacionCuadrupleMaster, habitacionCuadrupleDeluxe];
const habitacionesFamiliares = [habitacionFamiliarClasica, habitacionFamiliarMaster, habitacionFamiliarDeluxe];

console.log(habitacionesSimples);
console.log(habitacionesDobles);
console.log(habitacionesCuadruples);
console.log(habitacionesFamiliares);


// ===========================

let divDias = document.getElementById('dias');
let cantDias = document.createElement('p');
cantDias.innerHTML = localStorage.getItem('dias');
divDias.appendChild(cantDias);

let divAdultos = document.getElementById('adultos');
let cantAdultos = document.createElement('p');
cantAdultos.innerHTML = localStorage.getItem('adultos');
divAdultos.appendChild(cantAdultos);

let divMenores = document.getElementById('menores');
let cantMenores = document.createElement('p');
cantMenores.innerHTML = localStorage.getItem('menores');
divMenores.appendChild(cantMenores);

// ==========================

let huespedes = parseInt(localStorage.getItem('adultos'))+parseInt(localStorage.getItem('menores'));

let contenedorHabitaciones = document.getElementById("contenedor-habitaciones");

if (huespedes==1) {
    for (let index = 0; index < habitacionesSimples.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room" src="../public/${habitacionesSimples[index].tipo}.jpg" alt="">
                            <div class="d-flex flex-column align-items-center w-100 p-2">
                                <h3 class="text-center">${habitacionesSimples[index].nombre}</h3>
                                <p>${habitacionesSimples[index].info}</p>
                                <p>${habitacionesSimples[index].descripcion}</p>
                                <p>$${habitacionesSimples[index].precio}</p>
                                <button type="button" class="btn btn-primary">SELECCIONAR</button>
                            </div>`; 
    habitacion.id = habitacionesSimples[index].tipo;                        
    habitacion.className = ("d-flex");
    habitacion.classList.add("border","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(habitacion);
    }
} else if (huespedes==2) {
    for (let index = 0; index < habitacionesDobles.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room" src="../public/${habitacionesDobles[index].tipo}.jpg" alt="">
                            <div class="d-flex flex-column align-items-center w-100 p-2">
                                <h3 class="text-center">${habitacionesDobles[index].nombre}</h3>
                                <p>${habitacionesDobles[index].info}</p>
                                <p>${habitacionesDobles[index].descripcion}</p>
                                <p>$${habitacionesDobles[index].precio}</p>
                                <button type="button" class="btn btn-primary">SELECCIONAR</button>
                            </div>`;
    habitacion.id = habitacionesDobles[index].tipo;                         
    habitacion.className = ("border");
    habitacion.classList.add("d-flex","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(habitacion);
    }
}else if ((huespedes==3)||(huespedes==4)) {
    for (let index = 0; index < habitacionesCuadruples.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room" src="../public/${habitacionesCuadruples[index].tipo}.jpg" alt="">
                            <div class="d-flex flex-column align-items-center w-100 p-2">
                                <h3 class="text-center">${habitacionesCuadruples[index].nombre}</h3>
                                <p>${habitacionesCuadruples[index].info}</p>
                                <p>${habitacionesCuadruples[index].descripcion}</p>
                                <p>$${habitacionesCuadruples[index].precio}</p>
                                <button type="button" class="btn btn-primary">SELECCIONAR</button>
                            </div>`;
    habitacion.id = habitacionesCuadruples[index].tipo;                        
    habitacion.className = ("border");
    habitacion.classList.add("d-flex","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(habitacion);}
} else if ((huespedes>4)&&(huespedes<=6)) {
    for (let index = 0; index < habitacionesFamiliares.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room" src="../public/${habitacionesFamiliares[index].tipo}.jpg" alt="">
                            <div class="d-flex flex-column align-items-center w-100 p-2">
                                <h3 class="text-center">${habitacionesFamiliares[index].nombre}</h3>
                                <p>${habitacionesFamiliares[index].info}</p>
                                <p>${habitacionesFamiliares[index].descripcion}</p>
                                <p>$${habitacionesFamiliares[index].precio}</p>
                                <button type="button" class="btn btn-primary">SELECCIONAR</button>
                            </div>`;
    habitacion.id = habitacionesFamiliares[index].tipo;                        
    habitacion.className = ("border");
    habitacion.classList.add("d-flex","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(habitacion);}
}else {
    let mensaje=document.createElement("div");
    mensaje.innerHTML = `No hay habitaciones disponibles`; 
    mensaje.className = ("border");
    mensaje.classList.add("d-flex","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(mensaje);
}

// =============================================================
let contenedorReserva = document.getElementById("contenedor-reserva");


if (huespedes==1) {
    for (let index = 0; index < habitacionesSimples.length; index++) {
        let boton = document.getElementById(`${habitacionesSimples[index].tipo}`);
    
        boton.addEventListener("click", respuestaClick)
        
        function respuestaClick(){
    
            contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `info ${habitacionesSimples[index].nombre}`; 
            info.className = ("border");
            info.classList.add("d-flex","flex-row","mb-3","rounded")
            contenedorReserva.appendChild(info);
        }
    }
} else if (huespedes==2) {
    for (let index = 0; index < habitacionesDobles.length; index++) {
        let boton = document.getElementById(`${habitacionesDobles[index].tipo}`);
    
        boton.addEventListener("click", respuestaClick)
        
        function respuestaClick(){
    
            contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `info ${habitacionesDobles[index].nombre}`; 
            info.className = ("border");
            info.classList.add("d-flex","flex-row","mb-3","rounded")
            contenedorReserva.appendChild(info);
        }
    }
}else if ((huespedes==3)||(huespedes==4)) {
    for (let index = 0; index < habitacionesCuadruples.length; index++) {
        let boton = document.getElementById(`${habitacionesCuadruples[index].tipo}`);
    
        boton.addEventListener("click", respuestaClick)
        
        function respuestaClick(){
    
            contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `info ${habitacionesCuadruples[index].nombre}`; 
            info.className = ("border");
            info.classList.add("d-flex","flex-row","mb-3","rounded")
            contenedorReserva.appendChild(info);
        }
    }
} else if ((huespedes>4)&&(huespedes<=6)) {
    for (let index = 0; index < habitacionesFamiliares.length; index++) {
        let boton = document.getElementById(`${habitacionesFamiliares[index].tipo}`);
    
        boton.addEventListener("click", respuestaClick)
        
        function respuestaClick(){
    
            contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `info ${habitacionesFamiliares[index].nombre}`; 
            info.className = ("border");
            info.classList.add("d-flex","flex-row","mb-3","rounded")
            contenedorReserva.appendChild(info);
        }
    }
}else {
    let mensaje=document.createElement("div");
    mensaje.innerHTML = `No hay habitaciones disponibles`; 
    mensaje.className = ("border");
    mensaje.classList.add("d-flex","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(mensaje);
}





// for (let index = 0; index < habitacionesSimples.length; index++) {
//     let boton = document.getElementById(`${habitacionesSimples[index].tipo}`);

//     boton.addEventListener("click", respuestaClick)
    
//     function respuestaClick(){

//         contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
//         let info=document.createElement("div");

//         info.innerHTML = `info ${habitacionesSimples[index].nombre}`; 
//         info.className = ("border");
//         info.classList.add("d-flex","flex-row","mb-3","rounded")
//         contenedorReserva.appendChild(info);
//     }
// }

// for (let index = 0; index < habitacionesDobles.length; index++) {
//     let boton = document.getElementById(`${habitacionesDobles[index].tipo}`);

//     boton.addEventListener("click", respuestaClick)
    
//     function respuestaClick(){

//         contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
//         let info=document.createElement("div");

//         info.innerHTML = `info ${habitacionesDobles[index].nombre}`; 
//         info.className = ("border");
//         info.classList.add("d-flex","flex-row","mb-3","rounded")
//         contenedorReserva.appendChild(info);
//     }
// }

// for (let index = 0; index < habitacionesCuadruples.length; index++) {
//     let boton = document.getElementById(`${habitacionesCuadruples[index].tipo}`);

//     boton.addEventListener("click", respuestaClick)
    
//     function respuestaClick(){

//         contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
//         let info=document.createElement("div");

//         info.innerHTML = `info ${habitacionesCuadruples[index].nombre}`; 
//         info.className = ("border");
//         info.classList.add("d-flex","flex-row","mb-3","rounded")
//         contenedorReserva.appendChild(info);
//     }
// }

// for (let index = 0; index < habitacionesFamiliares.length; index++) {
//     let boton = document.getElementById(`${habitacionesFamiliares[index].tipo}`);

//     boton.addEventListener("click", respuestaClick)
    
//     function respuestaClick(){

//         contenedorReserva.innerHTML=`<h2 class="text-center">MI RESERVA</h2>`
//         let info=document.createElement("div");

//         info.innerHTML = `info ${habitacionesFamiliares[index].nombre}`; 
//         info.className = ("border");
//         info.classList.add("d-flex","flex-row","mb-3","rounded")
//         contenedorReserva.appendChild(info);
//     }
// }
