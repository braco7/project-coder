// Declaracion de clase persona:

class Persona {
    constructor(id, nombre, apellido, email) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}

// Declaracion de clases Cita y hora disponible:

let ulJuly = document.getElementById("july");
let liJuly = ulJuly.getElementsByTagName("li");
console.log(liJuly)

let ulAugust = document.getElementById("august");
let liAugust = ulAugust.getElementsByTagName("li")
console.log(liAugust)

let ulSeptember = document.getElementById("september");
let liSeptember = ulSeptember.getElementsByTagName("li");
console.log(liSeptember)


class DiaDisp {
    constructor(id, day) {
        this.id = id
        this.day = day
    }
}
class HoraDisp {
    constructor(id,hora) {
        this.id = id
        this.hora = hora
    }
}

Persona.nombre = "Juan"
Persona.apellido = "Lopez"
let mail = ""
let password = ""

function getMail() {
    mail = document.getElementById("email").value
    console.log(mail)
}

function getPw() {
    password = document.getElementById("password").value
    console.log(password)
}

function registrar() {
    Persona.mail && Persona.password? document.write(`Usted esta aqui`) : getMail();
}

function capturarDatos() {
    document.write(`Se hinchan las quetejedi`)
}









/* Armado y llenado de arrays con fechas y horas disponibles:
Fechas disponibles:
const diasDisp = []
diasDisp.push(new DiaDisp(1,"Lunes 26 de Julio"))
diasDisp.push(new DiaDisp(2,"Miércoles 28 de Julio"))
diasDisp.push(new DiaDisp(3,"Viernes 30 de Julio"))

Horas disponibles
const horasDisp = []
horasDisp.push(new HoraDisp(1,"08:00 hs"))
horasDisp.push(new HoraDisp(2,"10:00 hs"))
horasDisp.push(new HoraDisp(3,"14:00 hs"))

 Pedimos datos de la persona creando el objeto y asignando su valor
a la variable "persona": 
let persona = new Persona (1,prompt("Introduzca su nombre"), prompt("Introduzca su apellido"), prompt("Email: "))
 Desplegamos las fechas disponibles:

let fecha = prompt(`Escoja la fecha: \n1.- ${diasDisp[0].day}\n2.- ${diasDisp[1].day}\n3.- ${diasDisp[2].day}\n`)
let hora = prompt(`Escoja una hora: \n1.- ${horasDisp[0].hora}\n2.- ${horasDisp[1].hora}\n3.- ${horasDisp[2].hora}\n`)

Aplicamos metodo find para encontrar en el array el item 
correspondiente de acuerdo a la opción escogida por el usuario
let fecha1 = diasDisp.find(x => x.id == fecha)
let hora1 = horasDisp.find(x => x.id == hora)

Se despliegan los datos de la reserva en alert:
alert(`Hola ${persona.nombre}, usted ha sido reservado para el dia ${fecha1.day} a las ${hora1.hora}`) */