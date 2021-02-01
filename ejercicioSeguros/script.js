window.addEventListener("load", function() {

    /*var validacion = function(body) {
        var pasa;
        for (let i = 0; i < body.length; i++) {

            if (body[i].style.display == "block") {
                if (i == 0 || i == 1) {
                    var campos = body[i].querySelectorAll("input");
                    for (let j = 0; j < campos.length; j++) {
                        if (campos[j].value == "") {
                            pasa = false;
                        }
                    }

                } else {

                }
            }
        }
    }*/


    var funcionAnterior = function() {

        var body = document.querySelectorAll("body > div");
        var anterior = document.getElementById("anterior ");
        var siguiente = document.getElementById("siguiente ");
        var id = "";

        for (let i = 0; i < body.length; i++) {

            if (body[i].style.display == "block") {
                id = i;
            }
        }

        body[id].style.display = "none";
        body[id - 1].style.display = "block";
        siguiente.disabled = false;
        if (body[0].style.display == "block") {
            anterior.disabled = true;
        } else {
            anterior.disabled = false;
        }

    }

    var funcionSiguiente = function() {
        var body = document.querySelectorAll("body > div");

        var siguiente = document.getElementById("siguiente ");
        var anterior = document.getElementById("anterior ");
        var pasar = true;

        for (let i = 0; i < body.length; i++) {

            if (body[i].style.display == "block") {
                id = i;
            }
        }

        if (id == 0) {
            var inputs = body[0].querySelectorAll("input");

            var dni = inputs[0].value;
            var nombre = inputs[1].value;
            var fecha = inputs[2].value;
            if (dni == "") {
                inputs[0].style.backgroundColor = "red";
                pasar = false;
            } else {
                inputs[0].style.backgroundColor = "white";
            }

            if (nombre == "") {
                inputs[1].style.backgroundColor = "red";
                pasar = false;
            } else {
                inputs[1].style.backgroundColor = "white";
            }

            if (fecha == "") {
                inputs[2].style.backgroundColor = "red";
                pasar = false;
            } else {
                inputs[2].style.backgroundColor = "white";
            }

        } else if (id == 1) {
            var inputs = body[1].querySelectorAll("input");

            var marca = inputs[0].value;
            var modelo = inputs[1].value;
            var fecha2 = inputs[2].value;
            if (marca == "") {
                inputs[0].style.backgroundColor = "red";
                pasar = false;
            } else {
                inputs[0].style.backgroundColor = "white";
            }

            if (modelo == "") {
                inputs[1].style.backgroundColor = "red";
                pasar = false;
            } else {
                inputs[1].style.backgroundColor = "white";
            }

            if (fecha2 == "") {
                inputs[2].style.backgroundColor = "red";
                pasar = false;
            } else {
                inputs[2].style.backgroundColor = "white";
            }

        }
        if (pasar) {
            body[id].style.display = "none";
            body[id + 1].style.display = "block";
            anterior.disabled = false;
            if (body[2].style.display == "block") {
                siguiente.disabled = true;
            } else {
                siguiente.disabled = false;
            }
        }

    }

    var anterior = document.getElementById("anterior ");
    var siguiente = document.getElementById("siguiente ");

    anterior.disabled = true;

    anterior.addEventListener("click", funcionAnterior);
    siguiente.addEventListener("click", funcionSiguiente)
})