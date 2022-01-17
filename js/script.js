// Desafío 5 - Objetos

class Habitacion {
    constructor (nombre,capacidad,precioPorDia){
        this.nombre=nombre;
        this.capacidad=capacidad;
        this.precio=precioPorDia;
    }
    sumarIva(){
        this.precio=this.precio*1.21;
    }
    mostrarDatos(){
        alert("La "+this.nombre+" tiene una capacidad de "+this.capacidad+" persona/s, y cuesta $"+this.precio+" por día (IVA incluido).");
    }
}

const habitacionSimple = new Habitacion ("Habitación Simple",1,5000);
const habitacionDoble = new Habitacion ("Habitación Doble",2,6000);
const habitacionCuadruple = new Habitacion ("Habitacion Cuádruple",4,7000);
const habitacionFamiliar = new Habitacion ("Habitación Familiar",6,8000);


// Desafio 6 - Arrays

const listaHabitaciones = [];

listaHabitaciones.push (habitacionSimple, habitacionDoble, habitacionCuadruple, habitacionFamiliar);

console.log(listaHabitaciones);

habitacionSimple.sumarIva();
habitacionDoble.sumarIva();
habitacionCuadruple.sumarIva();
habitacionFamiliar.sumarIva();


habitacionSimple.mostrarDatos();
habitacionDoble.mostrarDatos();
habitacionCuadruple.mostrarDatos();
habitacionFamiliar.mostrarDatos();


// const habSimple=50;
// const habDoble=120;
// const habFamiliar=250;

// class DatosAlojamiento {
//     constructor (adultos,menores,dias) {
//         this.adultos = adultos;
//         this.menores = menores;
//         this.dias = dias;
//         this.huespedes = this.adultos+this.menores;
//         this.mostrarInfo = function () {
//             alert("Usted ingresó la siguiente información: "+adultos+" adultos, "+menores+" menores, "+dias+" días.");
//         }
//         this.calcularPrecio = function () {
//             if(this.huespedes==1){
//                 precio=habSimple*dias;
//             } else if (this.huespedes==2) {
//                 precio=habDoble*dias;
//             } else if ((this.huespedes>2)&&(this.huespedes<=6)) {
//                 precio=habFamiliar*dias;
//             } else {
//                 alert("No tenemos habitaciones disponibles.");
//             }
//         }
        
//         this.mostrarPrecio = function () {
//             alert("Su estadía de "+dias+" dias, para "+(adultos+menores)+" personas, es de $ "+precio+".");
//         }
//     }
// }

// const ingresoDatos=new DatosAlojamiento(
//     (prompt("Ingrese la cantidad de adultos:")),
//     (prompt("Ingrese la cantidad de menores:")),
//     (prompt("Ingrese la cantidad de días:"))
// );

// ingresoDatos.mostrarInfo();
// ingresoDatos.calcularPrecio();
// ingresoDatos.mostrarPrecio();