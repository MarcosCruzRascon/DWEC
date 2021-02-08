$(document).ready(function() {
    $("#contenedor").load("plantillas/principal.html");
    var mitelefono = prompt("Cual es tu numero de telefono");
    var memoria = $("<div>").append($(".contacto"));
    $.ajax({
        url: "ajax/identificado.js",
        data: "mitelefono=" + mitelefono,
        method: "post",
        dataType: "json",
        success: function(data) {
            $("#contactos").data(data);
            $.each(data.contactos, function(ind, valor) {

            })
        }
    });
});