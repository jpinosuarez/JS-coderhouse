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
        console.log("La "+this.nombre+" tiene una capacidad de "+this.capacidad+" persona/s, y cuesta $"+this.precio+" por día (IVA incluido).");
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


// ===================================

let adultos = parseInt(prompt("Ingrese la cantidad de adultos:"));
let menores = parseInt(prompt("Ingrese la cantidad de menores:"));
let dias = parseInt(prompt("Ingrese la cantidad de días:"));
let huespedes = adultos+menores;
let precio = 0;

function calcularPrecio(){
    if (huespedes==1) {
        precio = habitacionSimple.precio*dias;
        alert("Su estadía de "+dias+" dias, para "+huespedes+" persona, en una habitación simple, es de $"+precio+".");
    } else if (huespedes==2) {
        precio = habitacionDoble.precio*dias;
        alert("Su estadía de "+dias+" dias, para "+huespedes+" personas, en una habitación doble, es de $"+precio+".");
    }else if ((huespedes==3)||(huespedes==4)) {
        precio = habitacionCuadruple.precio*dias;
        alert("Su estadía de "+dias+" dias, para "+huespedes+" personas, en una habitación cuádruple, es de $"+precio+".");
    }else if ((huespedes==5)||(huespedes==6)) {
        precio = habitacionFamiliar.precio*dias;
        alert("Su estadía de "+dias+" dias, para "+huespedes+" personas, en una habitación familiar, es de $"+precio+".");
    }else {
        alert("No tenemos habitaciones disponibles.");
    }
}

calcularPrecio();