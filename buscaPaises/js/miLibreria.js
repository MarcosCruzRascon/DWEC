$(document).ready(function() {
    $("#texto").keyup(function() {
        $("select").remove();
        var select = $("<select size='20'>");
        $("div").append(select);
        var prueba = $(this).val();
        var direccion = "https://restcountries.eu/rest/v2/name/";
        var url = direccion + prueba;
        $.get(url, function(data, textStatus, jqXHR) {
            //var datos = JSON.stringify(data);
            var opcion;
            var fronterizos
            for (let i = 0; i < data.length; i++) {
                opcion = $("<option>");
                $(opcion).val(data[i].borders.join(";")).text(data[i].name);
                $("select").append(opcion);
                $(opcion).click(function() {
                    $.get("https://restcountries.eu/rest/v2/alpha?codes=" + $(this).val(), function(data, status) {
                        if (status == "success") {
                            $("#banderas").remove();
                            $("<div id='banderas'>").insertBefore("select");

                            for (let j = 0; j < data.length; j++) {
                                $("<img>").attr({
                                    width: 35,
                                    height: 25,
                                    src: data[j].flag
                                }).appendTo("#banderas");
                            }
                        }

                    });

                });
                console.log(data)
            }
        });
    });
});