// Obtener los elementos del DOM para el contador 1
var counterDisplay1 = document.getElementById('counter1');
var increaseBtn1 = document.getElementById('increaseBtn1');
var resetBtn1 = document.getElementById('resetBtn1');
var pointsInput1 = document.getElementById('points1');
// Obtener los elementos del DOM para el contador 2
var counterDisplay2 = document.getElementById('counter2');
var increaseBtn2 = document.getElementById('increaseBtn2');
var resetBtn2 = document.getElementById('resetBtn2');
var pointsInput2 = document.getElementById('points2');
var counter1 = 0;
var counter2 = 0;
// Función para sumar puntos al contador 1
var incrementCounter1 = function () {
    var points = parseInt(pointsInput1.value) || 0; // Obtener los puntos ingresados o 0 si está vacío
    counter1 += points;
    updateDisplay1();
};
// Función para reiniciar el contador 1
var resetCounter1 = function () {
    counter1 = 0;
    updateDisplay1();
};
// Función para actualizar la pantalla del contador 1
var updateDisplay1 = function () {
    counterDisplay1.innerText = counter1.toString();
};
// Función para sumar puntos al contador 2
var incrementCounter2 = function () {
    var points = parseInt(pointsInput2.value) || 0; // Obtener los puntos ingresados o 0 si está vacío
    counter2 += points;
    updateDisplay2();
};
// Función para reiniciar el contador 2
var resetCounter2 = function () {
    counter2 = 0;
    updateDisplay2();
};
// Función para actualizar la pantalla del contador 2
var updateDisplay2 = function () {
    counterDisplay2.innerText = counter2.toString();
};
// Asignar los eventos a los botones del contador 1
increaseBtn1.addEventListener('click', incrementCounter1);
resetBtn1.addEventListener('click', resetCounter1);
// Asignar los eventos a los botones del contador 2
increaseBtn2.addEventListener('click', incrementCounter2);
resetBtn2.addEventListener('click', resetCounter2);
