// Clase Competencia
var Competencia = /** @class */ (function () {
    function Competencia(equipos) {
        this.equipos = equipos;
    }

    Competencia.prototype.modificarPuntos = function (equipoNombre, disciplina, puntos) {
        var equipo = this.equipos.find(function (e) { return e.nombre === equipoNombre; });
        if (equipo) {
            equipo.puntos[disciplina] += puntos;
            if (equipo.puntos[disciplina] < 0) {
                equipo.puntos[disciplina] = 0; // Evitar puntaje negativo
            }
        }
    };

    Competencia.prototype.reiniciarPuntos = function (equipoNombre, disciplina) {
        var equipo = this.equipos.find(function (e) { return e.nombre === equipoNombre; });
        if (equipo) {
            equipo.puntos[disciplina] = 0;
        }
    };

    Competencia.prototype.obtenerPuntosPorDisciplina = function (equipoNombre, disciplina) {
        var equipo = this.equipos.find(function (e) { return e.nombre === equipoNombre; });
        return equipo ? equipo.puntos[disciplina] : 0;
    };

    // Nueva función para calcular el total de puntos de un equipo
    Competencia.prototype.calcularTotalPuntos = function (equipoNombre) {
        var equipo = this.equipos.find(function (e) { return e.nombre === equipoNombre; });
        return equipo ? equipo.puntos.handball + equipo.puntos.resistencia + equipo.puntos.ajedrez : 0;
    };

    return Competencia;
}());

var equipoA = { nombre: "Equipo A", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
var equipoB = { nombre: "Equipo B", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
var competencia = new Competencia([equipoA, equipoB]);

var actualizarPuntajes = function () {
    // Actualizar puntajes de Equipo A
    document.getElementById("handballA").textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "handball").toString();
    document.getElementById("resistenciaA").textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "resistencia").toString();
    document.getElementById("ajedrezA").textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "ajedrez").toString();
    // Actualizar puntajes de Equipo B
    document.getElementById("handballB").textContent = competencia.obtenerPuntosPorDisciplina("Equipo B", "handball").toString();
    document.getElementById("resistenciaB").textContent = competencia.obtenerPuntosPorDisciplina("Equipo B", "resistencia").toString();
    document.getElementById("ajedrezB").textContent = competencia.obtenerPuntosPorDisciplina("Equipo B", "ajedrez").toString();
};

window.modificarPuntos = function (equipoNombre, disciplina, puntos) {
    competencia.modificarPuntos(equipoNombre, disciplina, puntos);
    actualizarPuntajes();
};
window.reiniciarPuntos = function (equipoNombre, disciplina) {
    competencia.reiniciarPuntos(equipoNombre, disciplina);
    actualizarPuntajes();
};

// Nueva función para calcular el ganador
window.calcularGanador = function () {
    var totalA = competencia.calcularTotalPuntos("Equipo A");
    var totalB = competencia.calcularTotalPuntos("Equipo B");
    var resultadoElement = document.getElementById("resultado");

    if (totalA > totalB) {
        resultadoElement.textContent = "¡Equipo A gana con " + totalA + " puntos contra " + totalB + " puntos!";
    } else if (totalB > totalA) {
        resultadoElement.textContent = "¡Equipo B gana con " + totalB + " puntos contra " + totalA + " puntos!";
    } else {
        resultadoElement.textContent = "¡Empate! Ambos equipos tienen " + totalA + " puntos.";
    }
};

// Actualizar puntajes al cargar la página
actualizarPuntajes();
