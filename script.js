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
    });
});