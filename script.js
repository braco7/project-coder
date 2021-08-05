// Declaracion de clase persona:

class Persona {
    constructor(id, nombre, apellido, email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

// Creamos 5 objetos "persona"
const juan = new Persona(1, "Juan", "Gómez", "juan@juan.com")
const pedro = new Persona(2, "Pedro", "Schiaffino", "pedro@pedro.com")
const maria = new Persona(3, "Maria", "Robles", "maria@maria.com")
const federico = new Persona(4, "Federico", "Mendiolaza", "federico@federico.com")
const francisco = new Persona(5, "Francisco", "Ariza", "francisco@francisco.com")

// Llenamos el array
const personas = [juan, pedro, maria, federico, francisco]

let mail = "";
let password = "";
let chosenDate;
let choosenTime = "";

mail = function getMail() {
    return document.getElementById("email").value
}

function getPw() {
    password = document.getElementById("password").value

}


function getDate() {
    choosenDate = document.getElementById("fecha").value

}

function getTime() {
    choosenTime = document.getElementById("hora").value

}

// Validamos que el correo introducido en el campo existe en el array de objetos
function buscarPersona() {
    if (personas.some(x => x.email == mail)) {
        let bannerExiste = document.createElement("li")
        bannerExiste.innerText = `Bienvenido(a)` // Se le da la bienvenida y mostramos el menu de fecha y hora
        let listaDeBanner = document.getElementById("personaexiste")
        listaDeBanner.appendChild(bannerExiste)
        let secForm = document.getElementById("secform")
        secForm.style.display = "block"
    }
    else {
        let bannerNoExiste = document.createElement("li")
        bannerNoExiste.innerText = "Usted Debe registrarse" // Mandato de registrarse ( a ser desarrollado)
        let listaDeBannerNo = document.getElementById("personaexiste")
        listaDeBannerNo.appendChild(bannerNoExiste)
    }

}

function submit2() {
    let newEvent = document.createElement("li")
    newEvent.innerText = `Usted ha sido reservado para el dia ${choosenDate} a las ${choosenTime}`
    let listaDeEvento = document.getElementById("events")
    listaDeEvento.appendChild(newEvent)
}
