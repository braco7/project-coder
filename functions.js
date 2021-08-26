if (localStorage.getItem("correo") !== null) {
    document.getElementById("email").placeholder = mail;
}

// Determinamos el proximo registro para hacer los id consecutivos
function proximoRegistro() {
    let ultimo = personas.find((x) => x.id === personas.length);
    let registro = ultimo.id + 1;
    return registro;
}

let objdeDatos = {};

//Función para poner efectos de fecha y hora para el usuario
function dateAndTimePicker() {
    $("#fecha").datepicker({
        minDate: new Date(),
        dateFormat: "dd-mm-yy",
    });
    $("#fecha").on("change", function() {
        fecha = $(this).val();
    });
    $("#hora").timepicker({});
    $("#hora").on("change", function() {
        hora = $(this).val();
    });
}

// Función para obtener los datos del formulario de registro
function getDatos() {
    dateAndTimePicker();

    nombre = $("#regNombre").val();
    apellido = $("#regApellido").val();
    mail = $("#regEmail").val();
    pwd = $("#regPassword").val();
    if (nombre != "" && apellido != "" && mail != "" && pwd != "") {
        objdeDatos = { nombre: nombre, apellido: apellido, mail: mail, pwd: pwd };
        return objdeDatos;
    } else {
        alert("FALTAN DATOS");
    }
}

// Función para convertir a string para session storage
function estringify() {
    let elemJson = JSON.stringify(objdeDatos);
    const persona1 = JSON.parse(elemJson);
    $("#personaexiste")
        .append(
            `<li class="banner">La persona registrada es: ${persona1.nombre} ${persona1.apellido}</li>`
        )
        .delay(1000)
        .fadeOut("slow");
}

// función para hacer push al array de personas con los datos obtenidos del formulario de registro
function pushDatos(id, nombre, apellido, correo, pwd) {
    personas.push(new Persona(id, nombre, apellido, correo, pwd));
    return personas;
}

let secForm = $("#secform");
let regForm = $("#regform");

// Animación con Callback para darle efecto al formulario de login...
function animarLogin() {
    $(".login").animate({
            backgroundColor: "rgb(255, 255, 200)",
            width: "55%",
        },
        200,
        function() {
            $(".login").animate({
                    backgroundColor: "rgb(100, 255, 200)",
                    width: "50%",
                },
                500
            );

            setTimeout(registrar(), 3000);
        }
    );
}

function registrar() {
    $(".banner").fadeOut("slow");
    $("#logform").fadeOut();
    if (secForm.fadeIn()) {
        secForm.hide();
        regForm.fadeIn();
    } else {
        regForm.fadeIn();
    }
}

// Validación de la existencia del usuario en el array de objetos

function buscarPersona() {
    let mail = document.getElementById("email").value;
    localStorage.setItem("correo", mail);
    if (
        personas.some((x) => x.email === document.getElementById("email").value)
    ) {
        $("#logform").fadeOut("slow");
        let element = $("#personaexiste").append(
            `<li class="banner">Bienvenido</li>`
        );
        element.show().delay(3000).fadeOut();
        secForm.show();
        dateAndTimePicker();
    } else {
        $("#personaexiste")
            .append(`<li class="banner">Usted Debe registrarse</li>`)
            .delay(2000)
            .fadeOut("slow");
    }
}
// Al hacer click al botón del formulario de registro se toman los datos y se hace push al array personas
function getYPush() {
    $(".banner").fadeOut();
    getDatos();
    pushDatos(
        proximoRegistro(),
        getDatos().nombre,
        getDatos().apellido,
        getDatos().mail,
        getDatos().pwd
    );
    estringify();

    regForm.hide();
    secForm.show();
}

// Animación coon Callback en el formulario de reserva de fecha.
function submit2() {
    $(".login2").animate({
            backgroundColor: "rgb(200, 500, 200)",
            width: "55%",
            marginTop: "60px",
            borderRadius: "20px",
            padding: "15px",
            borderLeft: "3px solid #020008",
            boxShadow: "3px 3px 3px 3px #02082c",
        },
        200,
        function() {
            $(".login2").animate({
                backgroundColor: "rgb(224, 165, 138)",
                width: "50%",
                margin: "80px auto",
                borderRadius: "10px",
                padding: "20px",
                borderLeft: "0px solid #020008",
                boxShadow: "0px 0px 0px 0px #02082c",
            });
        }
    );

    choosenDate = $("#fecha").val();
    choosenTime = $("#hora").val();
    $("#events").append(
        `<li class="banner">Usted ha sido reservado para el día ${choosenDate} a las ${choosenTime}</li>`
    );
    window.scrollTo(0, document.body.scrollHeight);
    //console.log(`Usted ha sido reservado para el dia ${choosenDate} a las ${choosenTime}`)
}