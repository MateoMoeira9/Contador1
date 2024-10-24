// Definición de la interfaz Equipo
interface Equipo {
    nombre: string;
    puntos: {
        handball: number;
        resistencia: number;
        ajedrez: number;
    };
}

// Clase Competencia
class Competencia {
    equipos: Equipo[];

    constructor(equipos: Equipo[]) {
        this.equipos = equipos;
    }

    modificarPuntos(equipoNombre: string, disciplina: keyof Equipo["puntos"], puntos: number) {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        if (equipo) {
            equipo.puntos[disciplina] += puntos;
            if (equipo.puntos[disciplina] < 0) {
                equipo.puntos[disciplina] = 0; // Evitar puntaje negativo
            }
        }
    }

    reiniciarPuntos(equipoNombre: string, disciplina: keyof Equipo["puntos"]) {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        if (equipo) {
            equipo.puntos[disciplina] = 0;
        }
    }

    obtenerPuntosPorDisciplina(equipoNombre: string, disciplina: keyof Equipo["puntos"]): number {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        return equipo ? equipo.puntos[disciplina] : 0;
    }
}

// Crear instancias de equipos
const equipoA: Equipo = { nombre: "Equipo A", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
const equipoB: Equipo = { nombre: "Equipo B", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };

const competencia = new Competencia([equipoA, equipoB]);

// Función para actualizar puntajes en la interfaz
const actualizarPuntajes = () => {
    // Actualizar puntajes de Equipo A
    (document.getElementById("handballA") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "handball").toString();
    (document.getElementById("resistenciaA") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "resistencia").toString();
    (document.getElementById("ajedrezA") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "ajedrez").toString();

    // Actualizar puntajes de Equipo B
    (document.getElementById("handballB") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo B", "handball").toString();
    (document.getElementById("resistenciaB") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo B", "resistencia").toString();
    (document.getElementById("ajedrezB") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo B", "ajedrez").toString();
};

// Funciones para modificar y reiniciar puntos
(window as any).modificarPuntos = (equipoNombre: string, disciplina: keyof Equipo["puntos"], puntos: number) => {
    competencia.modificarPuntos(equipoNombre, disciplina, puntos);
    actualizarPuntajes();
};

(window as any).reiniciarPuntos = (equipoNombre: string, disciplina: keyof Equipo["puntos"]) => {
    competencia.reiniciarPuntos(equipoNombre, disciplina);
    actualizarPuntajes();
};

// Actualizar puntajes al cargar la página
actualizarPuntajes();
