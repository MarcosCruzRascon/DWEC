$(document).ready(function() {
    var plantillaContacto;
    $("#contenedor").load("plantillas/principal.html", function() {

        plantillaContacto = $("<div>").append($(".contacto"));
        plantillaContacto
        $("#acceso").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Acceder": function() {
                    cargarContactos($(this));
                },
                Cancel: function() {
                    $(this).dialog("close");
                }
            }
        });
        var memoria = $("<div>").append($(".contacto"));

    })

    function cargarContactos(ventana) {
        $.ajax({
            url: "ajax/identificado.json",
            data: "mitelefono=" + ventana.find("#telefono").val(),
            method: "post",
            dataType: "json",
            success: function(data) {
                $("#contactos").data(data);
                ventana.dialog("close");
                $.each(data.contactos, function(index, valor) {
                    var nuevoContacto = plantillaContacto.children().clone();
                    nuevoContacto.find("img").attr("src", valor.foto);
                    nuevoContacto.appendTo($("#contactos"));
                    nuevoContacto.find(".nombre").text(valor.nombre);
                    nuevoContacto.find(".mensaje").text(valor.ultimo.mensaje);
                    //nuevoContacto.find(".estado").html("&check;&check;").css("color", "blue");

                    if (valor.ultimo.estado == "0") {
                        nuevoContacto.find(".estado").html("&check;")
                    } else if (valor.ultimo.estado == "1") {
                        nuevoContacto.find(".estado").html("&check;&check;");
                    } else if (valor.ultimo.estado == "2") {
                        nuevoContacto.find(".estado").html("&check;&check;").css("color", "blue");
                    }
                    if (valor.noleido != "") {
                        nuevoContacto.find(".noleidos").text(valor.noleidos).css({
                            "background-color": "green",
                            "border-radius": "60px"
                        });
                    }

                    nuevoContacto.click(function() {

                    });
                })
            }
        });
    }
});