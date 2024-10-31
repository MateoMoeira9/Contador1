interface Equipo {
    nombre: string;
    puntos: {
        handball: number;
        resistencia: number;
        ajedrez: number;
    };
}

class Competencia {
    equipos: Equipo[];

    constructor(equipos: Equipo[]) {
        this.equipos = equipos;
    }

    modificarPuntos(equipoNombre: string, disciplina: keyof Equipo["puntos"], puntos: number) {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        if (equipo) {
            equipo.puntos[disciplina] += puntos;
            if (equipo.puntos[disciplina] < 0) equipo.puntos[disciplina] = 0;
        }
    }

    reiniciarPuntos(equipoNombre: string, disciplina: keyof Equipo["puntos"]) {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        if (equipo) equipo.puntos[disciplina] = 0;
    }

    obtenerPuntosPorDisciplina(equipoNombre: string, disciplina: keyof Equipo["puntos"]): number {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        return equipo ? equipo.puntos[disciplina] : 0;
    }

    calcularTotalPuntos(equipoNombre: string): number {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
         return equipo ? Object.values(equipo.puntos).reduce((acc, val) => acc + val, 0) : 0;
    }
}

const equipoA: Equipo = { nombre: "Equipo A", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
const equipoB: Equipo = { nombre: "Equipo B", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
const competencia = new Competencia([equipoA, equipoB]);

const actualizarPuntajes = () => {
    (document.getElementById("handballA") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "handball").toString();
    (document.getElementById("resistenciaA") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "resistencia").toString();
    (document.getElementById("ajedrezA") as HTMLElement).textContent = competencia.obtenerPuntosPorDisciplina("Equipo A", "ajedrez").toString();

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

// Función para calcular el ganador
(window as any).calcularGanador = () => {
    const totalA = competencia.calcularTotalPuntos("Equipo A");
    const totalB = competencia.calcularTotalPuntos("Equipo B");
    const resultadoElement = document.getElementById("resultado") as HTMLElement;

    if (totalA > totalB) {
        resultadoElement.textContent = `¡Equipo A gana con ${totalA} puntos contra ${totalB} puntos!`;
    } else if (totalB > totalA) {
        resultadoElement.textContent = `¡Equipo B gana con ${totalB} puntos contra ${totalA} puntos!`;
    } else {
        resultadoElement.textContent = `¡Empate! Ambos equipos tienen ${totalA} puntos.`;
    }
};

// Actualizar puntajes al cargar la página
actualizarPuntajes();
