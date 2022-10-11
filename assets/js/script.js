// prima riga

var aldo = 'Aldo';
let cliente = 'cliente';
const treQuattordici = 3.14;

document.getElementById('concatena').innerHTML = aldo + ', ' + cliente + ', ' + treQuattordici;


// seconda riga

var combinazione = aldo + ', ' + cliente + ', ' + treQuattordici;

document.getElementById('concatena2').innerHTML = combinazione;


// terza riga

var nome = 'Mario';
document.getElementById('var').innerHTML = nome;
document.getElementById('final').innerHTML = nome;
document.getElementById('let2').innerHTML = nome;

{
let nome = 'Carla';
document.getElementById('let').innerHTML = nome;
document.getElementById('let3').innerHTML = nome;
document.getElementById('final2').innerHTML = nome;
}


// quarta riga

var quindici = 15;
var trenta = quindici + quindici;
var cinque = quindici - 10;

document.getElementById('iniziale').innerHTML += 15;
document.getElementById('valore1').innerHTML += trenta++ + ', ' + trenta;
document.getElementById('valore2').innerHTML += cinque-- + ', ' + cinque;
document.getElementById('valore3').innerHTML += quindici * 3;
document.getElementById('valore4').innerHTML += quindici / 3;


document.getElementById('valore5').innerHTML += quindici + ' è un numero';