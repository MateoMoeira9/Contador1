// Obtener los elementos del DOM para el contador 1
const counterDisplay1 = document.getElementById('counter1') as HTMLElement;
const increaseBtn1 = document.getElementById('increaseBtn1') as HTMLElement;
const resetBtn1 = document.getElementById('resetBtn1') as HTMLElement;
const pointsInput1 = document.getElementById('points1') as HTMLInputElement;

// Obtener los elementos del DOM para el contador 2
const counterDisplay2 = document.getElementById('counter2') as HTMLElement;
const increaseBtn2 = document.getElementById('increaseBtn2') as HTMLElement;
const resetBtn2 = document.getElementById('resetBtn2') as HTMLElement;
const pointsInput2 = document.getElementById('points2') as HTMLInputElement;

let counter1 = 0;
let counter2 = 0;

// Función para sumar puntos al contador 1
const incrementCounter = () => {
    const points = parseInt(pointsInput1.value) || 0; // Obtener los puntos ingresados o 0 si está vacío
    counter1 += points;
    updateDisplay1();
};

// Función para reiniciar el contador 1
const resetCounter1 = () => {
    counter1 = 0;
    updateDisplay1();
};

// Función para actualizar la pantalla del contador 1
const updateDisplay1 = () => {
    counterDisplay1.innerText = counter1.toString();
};

// Función para sumar puntos al contador 2
const incrementCounter2 = () => {
    const points = parseInt(pointsInput2.value) || 0; // Obtener los puntos ingresados o 0 si está vacío
    counter2 += points;
    updateDisplay2();
};

// Función para reiniciar el contador 2
const resetCounter2 = () => {
    counter2 = 0;
    updateDisplay2();
};

// Función para actualizar la pantalla del contador 2
const updateDisplay2 = () => {
    counterDisplay2.innerText = counter2.toString();
};

// Asignar los eventos a los botones del contador 1
increaseBtn1.addEventListener('click', incrementCounter);
resetBtn1.addEventListener('click', resetCounter1);

// Asignar los eventos a los botones del contador 2
increaseBtn2.addEventListener('click', incrementCounter2);
resetBtn2.addEventListener('click', resetCounter2);


