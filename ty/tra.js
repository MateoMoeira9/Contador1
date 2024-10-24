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
    return Competencia;
}());
// Crear instancias de equipos
var equipoA = { nombre: "Equipo A", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
var equipoB = { nombre: "Equipo B", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
var competencia = new Competencia([equipoA, equipoB]);
// Función para actualizar puntajes en la interfaz
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
// Funciones para modificar y reiniciar puntos
window.modificarPuntos = function (equipoNombre, disciplina, puntos) {
    competencia.modificarPuntos(equipoNombre, disciplina, puntos);
    actualizarPuntajes();
};
window.reiniciarPuntos = function (equipoNombre, disciplina) {
    competencia.reiniciarPuntos(equipoNombre, disciplina);
    actualizarPuntajes();
};
// Actualizar puntajes al cargar la página
actualizarPuntajes();
