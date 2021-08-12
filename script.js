// Declaracion de clase persona:

class Persona {
    constructor(id, nombre, apellido, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password
    }
}

// Creamos 5 objetos "persona"
const juan = new Persona(1, "Juan", "Gómez", "juan@juan.com","1234")
const pedro = new Persona(2, "Pedro", "Schiaffino", "pedro@pedro.com","1234")
const maria = new Persona(3, "Maria", "Robles", "maria@maria.com","1234")
const federico = new Persona(4, "Federico", "Mendiolaza", "federico@federico.com","1234")
const francisco = new Persona(5, "Francisco", "Ariza", "francisco@francisco.com","1234")

let listaDeBanner = "";
let nombre = "";
let apellido = "";
let mail = localStorage.getItem("correo");
let pwd = "";
if (localStorage.getItem("correo") !== null) {
    document.getElementById('email').placeholder=mail;
}




const personas = [juan,pedro,maria,federico,francisco]

// Daterminamos el proximo registro para hacer los id consecutivos
function proximoRegistro() {
let ultimo = personas.find(x => x.id === personas.length)
let registro = ultimo.id +1
return registro 
}


// Función para obtener los datos del formulario de registro 
let objdeDatos = {}
function getDatos() {   
    nombre = document.getElementById("regNombre").value
    apellido = document.getElementById("regApellido").value
    mail = document.getElementById("regEmail").value
    pwd = document.getElementById("regPassword").value
    if(nombre != "" && apellido != "" && mail !="" && pwd != "") {
    objdeDatos = {nombre:nombre, apellido:apellido, mail:mail, pwd:pwd}
    return objdeDatos
    } else {
        alert ("FALTAN DATOS")
    }
}

// función para hacer push al array de personas con los datos obtenidos del formulario de registro
function pushDatos(id,nombre,apellido,correo,pwd) {
        personas.push(new Persona (id,nombre,apellido,correo,pwd))
        return personas
}


let secForm = document.getElementById("secform")
let regForm = document.getElementById("regform")

function registrar() {
    document.getElementById("personaexiste").style.display = "none"
    if (secForm.style.display = "block")
     {
        secForm.style.display = "none"
        regForm.style.display = "block"
    } else {
        regForm.style.display = "block"
    }
    
}

// Validación de la existencia del usuario en el array de objetos


function buscarPersona() {
    //borrarBanners("personaexiste")
    //borrarBanners("events")
        let mail = document.getElementById("email").value
        localStorage.setItem("correo", mail)
    if (personas.some(x => x.email == document.getElementById("email").value)) {
        let bannerExiste = document.createElement("li")
        bannerExiste.innerText = `Bienvenido(a)` // Se le da la bienvenida y mostramos el menu de fecha y hora
        listaDeBanner = document.getElementById("personaexiste")
        listaDeBanner.appendChild(bannerExiste)       
        secForm.style.display = "block"
    }
    else {
        let bannerNoExiste = document.createElement("li")
        bannerNoExiste.innerText = "Usted Debe registrarse" // Mandato de registrarse ( a ser desarrollado)
        let listaDeBannerNo = document.getElementById("personaexiste")
        listaDeBannerNo.appendChild(bannerNoExiste)      
        //regForm.style.display = "block"
    }

}

// Al hacer click al botón del formulario de registro se toman los datos y se hace push al array personas
function getYPush() {
    document.getElementById("personaexiste").style.display = "none"
    getDatos();
    pushDatos(proximoRegistro(),getDatos().nombre,getDatos().apellido,getDatos().mail,getDatos().pwd);
    //console.log(personas)
    regForm.style.display = "none"
    secForm.style.display = "block"
}

let choosenDate;
let choosenTime;

function submit2() {
    document.getElementById("regform").style.display = "none"
    choosenDate = document.getElementById("fecha").value
    choosenTime = document.getElementById("hora").value
    let newEvent = document.createElement("li")
    newEvent.innerText = `Usted ha sido reservado para el dia ${choosenDate} a las ${choosenTime}`
    let listaDeEvento = document.getElementById("events")
    listaDeEvento.appendChild(newEvent)
    window.scrollTo(0,document.body.scrollHeight);
    //console.log(`Usted ha sido reservado para el dia ${choosenDate} a las ${choosenTime}`)
}
