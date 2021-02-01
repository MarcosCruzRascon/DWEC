window.addEventListener("load", function() {

    var derechaUno = document.getElementById("derechaUno");
    var derechaTodos = document.getElementById("derechaTodos");
    var izquierdaUno = document.getElementById("izquierdaUno");
    var izquierdaTodos = document.getElementById("izquierdaTodos");



    derechaUno.addEventListener("click", function() {

        var izquierda = document.getElementById("tablaIzquierda");
        var derecha = document.getElementById("tablaDerecha");
        derecha.add(izquierda.options[izquierda.selectedIndex]);

    })

    izquierdaUno.addEventListener("click", function() {

        var izquierda = document.getElementById("tablaIzquierda");
        var derecha = document.getElementById("tablaDerecha");
        izquierda.add(derecha.options[derecha.selectedIndex])

    })


    derechaTodos.addEventListener("click", function() {
        var izquierda = document.getElementById("tablaIzquierda");
        var derecha = document.getElementById("tablaDerecha");


        for (var i = 0; i < izquierda.length;) {
            izquierda[0].selected = true;
            derecha.add(izquierda.options[izquierda.selectedIndex]);
        }
    })

    izquierdaTodos.addEventListener("click", function() {
        var izquierda = document.getElementById("tablaIzquierda");
        var derecha = document.getElementById("tablaDerecha");


        for (var i = 0; i < derecha.length;) {
            derecha[0].selected = true;
            izquierda.add(derecha.options[derecha.selectedIndex]);
        }
    })


})