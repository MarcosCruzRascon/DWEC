$(document).ready(function() {
    $.getJSON("./json/identificado.json",
        function(data, textStatus, jqXHR) {
            if (textStatus = "success") {
                var misDatos = data;
                for (let i = 0; i < misDatos.contactos.length; i++) {
                    var div = $("<div>");
                    $(div).text(misDatos.contactos[i].nombre);
                    $(div).data("numero", misDatos.contactos[i].telefono);

                    $(div).click(function() {
                        var este = $(this).data("numero")
                        borrar();
                        $.get("./json/conversacion.json", function(data, textStatus, jqXHR) {
                            var conversacion = data;
                            for (let i = 0; i < conversacion.length; i++) {
                                if (conversacion[i].sender == este || conversacion[i].receiver == este) {
                                    var divmensaje = $("<div>");
                                    var texto = $("<p>").text(conversacion[i].mensaje);
                                    var fechaHora = $("<small>").text(conversacion[i].fechaHora);
                                    $(divmensaje).append(texto);
                                    $(divmensaje).append(fechaHora);
                                    if (misDatos.mitelefono == conversacion[i].sender) {
                                        $(divmensaje).css({ "background-color": "green" });
                                        $(divmensaje).addClass("enviados");
                                    } else {
                                        $(divmensaje).css({ "background-color": "grey" });
                                        $(divmensaje).addClass("recibidos");
                                    }
                                    $("#chat").append($(divmensaje));
                                }
                            }

                        });
                    });
                    $("#conversaciones").append($(div));
                }
            }

        }
    );

})

function borrar() {
    $("#chat").children().remove();
}