// Desafío 5 - Objetos

class Habitacion {
    constructor (nombre,capacidad,precio, tipo){
        this.nombre=nombre;
        this.capacidad=capacidad;
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

const habitacionSimpleClasica = new Habitacion ("Habitación Simple",1,5000,"Clásica");
const habitacionDobleClasica = new Habitacion ("Habitación Doble",2,6000,"Clásica");
const habitacionCuadrupleClasica = new Habitacion ("Habitacion Cuádruple",4,7000,"Clásica");
const habitacionFamiliarClasica = new Habitacion ("Habitación Familiar",6,8000,"Clásica");

const habitacionSimpleMaster = new Habitacion ("Habitación Simple",1,5500,"Master");
const habitacionDobleMaster = new Habitacion ("Habitación Doble",2,6500,"Master");
const habitacionCuadrupleMaster = new Habitacion ("Habitacion Cuádruple",4,7500,"Master");
const habitacionFamiliarMaster = new Habitacion ("Habitación Familiar",6,8500,"Master");

const habitacionSimpleDeluxe = new Habitacion ("Habitación Simple",1,5500,"Deluxe");
const habitacionDobleDeluxe = new Habitacion ("Habitación Doble",2,6500,"Deluxe");
const habitacionCuadrupleDeluxe = new Habitacion ("Habitacion Cuádruple",4,7500,"Deluxe");
const habitacionFamiliarDeluxe = new Habitacion ("Habitación Familiar",6,8500,"Deluxe");


// Desafio 6 - Arrays

const listaHabitacionesClasicas = [];

listaHabitacionesClasicas.push (habitacionSimpleClasica, habitacionDobleClasica, habitacionCuadrupleClasica, habitacionFamiliarClasica);

const listaHabitacionesMaster = [];

listaHabitacionesMaster.push (habitacionSimpleMaster, habitacionDobleMaster, habitacionCuadrupleMaster, habitacionFamiliarMaster);

const listaHabitacionesDeluxe = [];

listaHabitacionesDeluxe.push (habitacionSimpleDeluxe, habitacionDobleDeluxe, habitacionCuadrupleDeluxe, habitacionFamiliarDeluxe);

console.log(listaHabitacionesClasicas);
console.log(listaHabitacionesMaster);
console.log(listaHabitacionesDeluxe);

// habitacionSimple.sumarIva();
// habitacionDoble.sumarIva();
// habitacionCuadruple.sumarIva();
// habitacionFamiliar.sumarIva();


// habitacionSimple.mostrarDatos();
// habitacionDoble.mostrarDatos();
// habitacionCuadruple.mostrarDatos();
// habitacionFamiliar.mostrarDatos();


// ===================================

let adultos = parseInt(prompt("Ingrese la cantidad de adultos:"));
let menores = parseInt(prompt("Ingrese la cantidad de menores:"));
let dias = parseInt(prompt("Ingrese la cantidad de días:"));
let huespedes = adultos+menores;
let precio = 0;

localStorage.setItem('dias',dias);
localStorage.setItem('adultos',adultos);
localStorage.setItem('menores',menores);

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


// function calcularPrecio(){
//     if (huespedes==1) {
//         precio = habitacionSimple.precio*dias;
//         alert("Su estadía de "+dias+" dias, para "+huespedes+" persona, en una habitación simple, es de $"+precio+".");
//     } else if (huespedes==2) {
//         precio = habitacionDoble.precio*dias;
//         alert("Su estadía de "+dias+" dias, para "+huespedes+" personas, en una habitación doble, es de $"+precio+".");
//     }else if ((huespedes==3)||(huespedes==4)) {
//         precio = habitacionCuadruple.precio*dias;
//         alert("Su estadía de "+dias+" dias, para "+huespedes+" personas, en una habitación cuádruple, es de $"+precio+".");
//     }else if ((huespedes==5)||(huespedes==6)) {
//         precio = habitacionFamiliar.precio*dias;
//         alert("Su estadía de "+dias+" dias, para "+huespedes+" personas, en una habitación familiar, es de $"+precio+".");
//     }else {
//         alert("No tenemos habitaciones disponibles.");
//     }
// }

// calcularPrecio();