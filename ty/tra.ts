
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

    agregarPuntos(equipoNombre: string, disciplina: keyof Equipo["puntos"], puntos: number) {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        if (equipo) {
            equipo.puntos[disciplina] += puntos;
        }
    }

    obtenerTotalPuntos(equipoNombre: string): number {
        const equipo = this.equipos.find(e => e.nombre === equipoNombre);
        if (equipo) {
            const { handball, resistencia, ajedrez } = equipo.puntos;
            return handball + resistencia + ajedrez;
        }
        return 0;
    }

    equipoConMasPuntos(): string {
        let mejorEquipo = "";
        let maxPuntos = 0;
        this.equipos.forEach(equipo => {
            const total = this.obtenerTotalPuntos(equipo.nombre);
            if (total > maxPuntos) {
                maxPuntos = total;
                mejorEquipo = equipo.nombre;
            }
        });
        return mejorEquipo;
    }

    disciplinaConMayorPuntuacion(): string {
        let maxDisciplina = "";
        let maxPuntos = 0;

        this.equipos.forEach(equipo => {
            for (const disciplina in equipo.puntos) {
                const puntos = equipo.puntos[disciplina as keyof Equipo["puntos"]];
                if (puntos > maxPuntos) {
                    maxPuntos = puntos;
                    maxDisciplina = disciplina;
                }
            }
        });
        return maxDisciplina;
    }
}

// Crear instancias de equipos
const equipoA: Equipo = { nombre: "Equipo A", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };
const equipoB: Equipo = { nombre: "Equipo B", puntos: { handball: 0, resistencia: 0, ajedrez: 0 } };

const competencia = new Competencia([equipoA, equipoB]);

// Agregar algunos puntos de ejemplo
competencia.agregarPuntos("Equipo A", "handball", 10);
competencia.agregarPuntos("Equipo B", "handball", 15);
competencia.agregarPuntos("Equipo A", "resistencia", 8);
competencia.agregarPuntos("Equipo B", "ajedrez", 20);


const actualizarPuntajes = () => {
    (document.getElementById("handballA") as HTMLElement).textContent = equipoA.puntos.handball.toString();
    (document.getElementById("resistenciaA") as HTMLElement).textContent = equipoA.puntos.resistencia.toString();
    (document.getElementById("ajedrezA") as HTMLElement).textContent = equipoA.puntos.ajedrez.toString();
    (document.getElementById("totalA") as HTMLElement).textContent = competencia.obtenerTotalPuntos("Equipo A").toString();

    (document.getElementById("handballB") as HTMLElement).textContent = equipoB.puntos.handball.toString();
    (document.getElementById("resistenciaB") as HTMLElement).textContent = equipoB.puntos.resistencia.toString();
    (document.getElementById("ajedrezB") as HTMLElement).textContent = equipoB.puntos.ajedrez.toString();
    (document.getElementById("totalB") as HTMLElement).textContent = competencia.obtenerTotalPuntos("Equipo B").toString();

    (document.getElementById("bestTeam") as HTMLElement).textContent = competencia.equipoConMasPuntos();
    (document.getElementById("bestDiscipline") as HTMLElement).textContent = competencia.disciplinaConMayorPuntuacion();
};

actualizarPuntajes();

