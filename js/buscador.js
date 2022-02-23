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

let descripcion = "El Hotel Patagonia se encuentra en San Carlos de Bariloche, a 100 metros del Centro Cívico, y ofrece wifi gratis. Cuenta con un bar abierto las 24 horas. Las habitaciones incluyen smart TV y baño privado con bañera, bidet, artículos de aseo gratuitos y secador de pelo. El Hotelse encuentra a 21 km de la estación de esquí de Cerro Catedral, a 11 km de Bahía Serena y a 13 km del aeropuerto."

const habitacionSimpleClasica = new Habitacion ("Habitación Simple Clásica",
                                                descripcion,
                                                `16 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte`,
                                                5000,
                                                "simpleClasica");
const habitacionDobleClasica = new Habitacion ("Habitación Doble Clásica",
                                                descripcion,
                                                `22 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>`,
                                                6000,
                                                "dobleClasica");
const habitacionCuadrupleClasica = new Habitacion ("Habitacion Cuádruple Clásica",
                                                descripcion,
                                                `25 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>`,
                                                7000,
                                                "cuadrupleClasica");
const habitacionFamiliarClasica = new Habitacion ("Habitación Familiar Clásica",
                                                descripcion,
                                                `30 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>`,
                                                8000,
                                                "familiarClasica");

const habitacionSimpleMaster = new Habitacion ("Habitación Simple Master",
                                                descripcion,
                                                `16 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Bañera con hidromasaje`,
                                                5500,
                                                "simpleMaster");
const habitacionDobleMaster = new Habitacion ("Habitación Doble Master",
                                                descripcion,
                                                `22 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Bañera con hidromasaje`,
                                                6500,
                                                "dobleMaster");
const habitacionCuadrupleMaster = new Habitacion ("Habitacion Cuádruple Master",
                                                descripcion,
                                                `25 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Bañera con hidromasaje`,
                                                7500,
                                                "cuadrupleMaster");
const habitacionFamiliarMaster = new Habitacion ("Habitación Familiar Master",
                                                descripcion,
                                                `30 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Bañera con hidromasaje`,
                                                8500,
                                                "familiarMaster");

const habitacionSimpleDeluxe = new Habitacion ("Habitación Simple Deluxe",
                                                descripcion,
                                                `20 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Jacuzzi en suite`,
                                                6000,
                                                "simpleDeluxe");
const habitacionDobleDeluxe = new Habitacion ("Habitación Doble Deluxe",
                                                descripcion,
                                                `25 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Jacuzzi en suite`,
                                                7000,
                                                "dobleDeluxe");
const habitacionCuadrupleDeluxe = new Habitacion ("Habitacion Cuádruple Deluxe",
                                                descripcion,
                                                `30 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Jacuzzi en suite`,
                                                8000,
                                                "cuadrupleDeluxe");
const habitacionFamiliarDeluxe = new Habitacion ("Habitación Familiar Deluxe",
                                                descripcion,
                                                `35 m²<br>
                                                Baño privado<br>
                                                smart TV<br>
                                                Minibar<br>
                                                Wifi gratis<br>
                                                Artículos de tocador gratuitos<br>
                                                Caja fuerte<br>
                                                Jacuzzi en suite`,
                                                9000,
                                                "familiarDeluxe");


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
cantDias.innerHTML = sessionStorage.getItem('dias');
cantDias.className = "text-center";
divDias.appendChild(cantDias);

let divAdultos = document.getElementById('adultos');
let cantAdultos = document.createElement('p');
cantAdultos.innerHTML = sessionStorage.getItem('adultos');
cantAdultos.className = "text-center";
divAdultos.appendChild(cantAdultos);

let divMenores = document.getElementById('menores');
let cantMenores = document.createElement('p');
cantMenores.innerHTML = sessionStorage.getItem('menores');
cantMenores.className = "text-center";
divMenores.appendChild(cantMenores);

// ==========================

let huespedes = parseInt(sessionStorage.getItem('adultos'))+parseInt(sessionStorage.getItem('menores'));

let contenedorHabitaciones = document.getElementById("contenedor-habitaciones");

if (huespedes==1) {
    for (let index = 0; index < habitacionesSimples.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room h-100" src="../public/${habitacionesSimples[index].tipo}.webp" alt="">
                            <div class="d-flex flex-column align-items-start px-4 w-100 p-2">
                                <h3 class="text-center">${habitacionesSimples[index].nombre}</h3>
                                <p>${habitacionesSimples[index].info}</p>
                                <p>Precio por noche: $${habitacionesSimples[index].precio}</p>
                                <button type="button" class="btn-seleccionar">Seleccionar</button>
                            </div>`; 
    habitacion.id = habitacionesSimples[index].tipo;                        
    habitacion.className = ("d-flex");
    habitacion.classList.add("align-items-center", "border","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(habitacion);
    }
} else if (huespedes==2) {
    for (let index = 0; index < habitacionesDobles.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room h-100" src="../public/${habitacionesDobles[index].tipo}.webp" alt="">
                            <div class="d-flex flex-column align-items-center w-100 p-2">
                                <h3 class="text-center">${habitacionesDobles[index].nombre}</h3>
                                <p>${habitacionesDobles[index].info}</p>
                                <p>Precio por noche: $${habitacionesDobles[index].precio}</p>
                                <button type="button" class="btn-seleccionar">Seleccionar</button>
                            </div>`;
    habitacion.id = habitacionesDobles[index].tipo;                         
    habitacion.className = ("d-flex");
    habitacion.classList.add("align-items-center", "border","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(habitacion);
    }
}else if ((huespedes==3)||(huespedes==4)) {
    for (let index = 0; index < habitacionesCuadruples.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room h-100" src="../public/${habitacionesCuadruples[index].tipo}.webp" alt="">
                            <div class="d-flex flex-column align-items-center w-100 p-2">
                                <h3 class="text-center">${habitacionesCuadruples[index].nombre}</h3>
                                <p>${habitacionesCuadruples[index].info}</p>
                                <p>Precio por noche: $${habitacionesCuadruples[index].precio}</p>
                                <button type="button" class="btn-seleccionar">Seleccionar</button>
                            </div>`;
    habitacion.id = habitacionesCuadruples[index].tipo;                        
    habitacion.className = ("d-flex");
    habitacion.classList.add("align-items-center", "border","flex-row","mb-3","rounded")
    contenedorHabitaciones.appendChild(habitacion);}
} else if ((huespedes>4)&&(huespedes<=6)) {
    for (let index = 0; index < habitacionesFamiliares.length; index++) {
    let habitacion=document.createElement("div");
    habitacion.innerHTML = `<img class="img-fluid rounded img-room h-100" src="../public/${habitacionesFamiliares[index].tipo}.webp" alt="">
                            <div class="d-flex flex-column align-items-center w-100 p-2">
                                <h3 class="text-center">${habitacionesFamiliares[index].nombre}</h3>
                                <p>${habitacionesFamiliares[index].info}</p>
                                <p>Precio por noche: $${habitacionesFamiliares[index].precio}</p>
                                <button type="button" class="btn-seleccionar">Seleccionar</button>
                            </div>`;
    habitacion.id = habitacionesFamiliares[index].tipo;                        
    habitacion.className = ("d-flex");
    habitacion.classList.add("align-items-center", "border","flex-row","mb-3","rounded")
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
    
            contenedorReserva.innerHTML=`<h2 class="text-center">Mi reserva</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `<h3 class="text-center mx-3">${habitacionesSimples[index].nombre}</h3> <br>
                                <p class="text-center mx-3">${habitacionesSimples[index].descripcion}</p> <br>
                                <p class="mx-3">${habitacionesSimples[index].info}</p> <br>
                                <p class="mx-3">Precio por noche: $${habitacionesSimples[index].precio}</p> <br>
                                <p class="mx-3">Precio por ${sessionStorage.getItem('dias')} noches: $${sessionStorage.getItem('dias')*habitacionesSimples[index].precio}</p>
                                <div class="d-flex justify-content-center my-3">
                                    <button class="btn-seleccionar">Reservar</button>
                                </div>
                                `; 
            info.className = ("d-flex");
            info.classList.add("flex-column","my-3","rounded")
            contenedorReserva.appendChild(info);
        }
    }
} else if (huespedes==2) {
    for (let index = 0; index < habitacionesDobles.length; index++) {
        let boton = document.getElementById(`${habitacionesDobles[index].tipo}`);
    
        boton.addEventListener("click", respuestaClick)
        
        function respuestaClick(){
    
            contenedorReserva.innerHTML=`<h2 class="text-center">Mi reserva</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `<h3 class="text-center mx-3">${habitacionesDobles[index].nombre}</h3> <br>
                                <p class="text-center mx-3">${habitacionesDobles[index].descripcion}</p> <br>
                                <p class="mx-3">${habitacionesDobles[index].info}</p> <br>
                                <p class="mx-3">Precio por noche: $${habitacionesDobles[index].precio}</p> <br>
                                <p class="mx-3">Precio por ${sessionStorage.getItem('dias')} noches: $${sessionStorage.getItem('dias')*habitacionesDobles[index].precio}</p>
                                <div class="d-flex justify-content-center my-3">
                                    <button class="btn-seleccionar">Reservar</button>
                                </div>
                                `; 
            info.className = ("d-flex");
            info.classList.add("flex-column","my-3","rounded")
            contenedorReserva.appendChild(info);
        }
    }
}else if ((huespedes==3)||(huespedes==4)) {
    for (let index = 0; index < habitacionesCuadruples.length; index++) {
        let boton = document.getElementById(`${habitacionesCuadruples[index].tipo}`);
    
        boton.addEventListener("click", respuestaClick)
        
        function respuestaClick(){
    
            contenedorReserva.innerHTML=`<h2 class="text-center">Mi reserva</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `<h3 class="text-center mx-3">${habitacionesCuadruples[index].nombre}</h3> <br>
                                <p class="text-center mx-3">${habitacionesCuadruples[index].descripcion}</p> <br>
                                <p class="mx-3">${habitacionesCuadruples[index].info}</p> <br>
                                <p class="mx-3">Precio por noche: $${habitacionesCuadruples[index].precio}</p> <br>
                                <p class="mx-3">Precio por ${sessionStorage.getItem('dias')} noches: $${sessionStorage.getItem('dias')*habitacionesCuadruples[index].precio}</p>
                                <div class="d-flex justify-content-center my-3">
                                    <button class="btn-seleccionar">Reservar</button>
                                </div>
                                `; 
            info.className = ("d-flex");
            info.classList.add("flex-column","my-3","rounded")
            contenedorReserva.appendChild(info);
        }
    }
} else if ((huespedes>4)&&(huespedes<=6)) {
    for (let index = 0; index < habitacionesFamiliares.length; index++) {
        let boton = document.getElementById(`${habitacionesFamiliares[index].tipo}`);
    
        boton.addEventListener("click", respuestaClick)
        
        function respuestaClick(){
    
            contenedorReserva.innerHTML=`<h2 class="text-center">Mi reserva</h2>`
            let info=document.createElement("div");
    
            info.innerHTML = `<h3 class="text-center mx-3">${habitacionesFamiliares[index].nombre}</h3> <br>
                                <p class="text-center mx-3">${habitacionesFamiliares[index].descripcion}</p> <br>
                                <p class="mx-3">${habitacionesFamiliares[index].info}</p> <br>
                                <p class="mx-3">Precio por noche: $${habitacionesFamiliares[index].precio}</p> <br>
                                <p class="mx-3">Precio por ${sessionStorage.getItem('dias')} noches: $${sessionStorage.getItem('dias')*habitacionesFamiliares[index].precio}</p>
                                <div class="d-flex justify-content-center my-3">
                                    <button class="btn-seleccionar">Reservar</button>
                                </div>
                                `; 
            info.className = ("d-flex");
            info.classList.add("flex-column","my-3","rounded")
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
