// Declaracion de clase persona:

class Persona {
    constructor(id, nombre, apellido, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }
}

// Creamos 5 objetos "persona"
const juan = new Persona(1, "Juan", "Gómez", "juan@juan.com", "1234");
const pedro = new Persona(2, "Pedro", "Schiaffino", "pedro@pedro.com", "1234");
const maria = new Persona(3, "Maria", "Robles", "maria@maria.com", "1234");
const federico = new Persona(
    4,
    "Federico",
    "Mendiolaza",
    "federico@federico.com",
    "1234"
);
const francisco = new Persona(
    5,
    "Francisco",
    "Ariza",
    "francisco@francisco.com",
    "1234"
);
let choosenDate;
let choosenTime;
let listaDeBanner = "";
let nombre = "";
let apellido = "";
let mail = localStorage.getItem("correo");
let pwd = "";

const personas = [juan, pedro, maria, federico, francisco];


class Profesionales {
    constructor(id, nombre, especialidad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = especialidad;
    }
}
