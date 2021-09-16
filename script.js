$(function() {
    $("#submit").on("click", () => {
        buscarPersona();
    });
    $("#register").on("click", () => {
        animarLogin();
    });
    $("#reservar").on("click", () => {
        submit2();
    });
    $("#regPersonas").on("click", () => {
        getYPush();
    });/* 
    $("#prof").on("click", () => {
        consulta(); 
    });*/
    $("#deFechaAtras").on("click", () => {
        animarLogin();
    });
    $("#odontologos").on("click", () => {
        consulta("odontologo");
    });
    $("#cirujanos").on("click", () => {
        consulta("cirujano");
    });
    $("#nutricionistas").on("click", () => {
        consulta("nutricionista");
    });
});