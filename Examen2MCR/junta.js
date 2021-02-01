//ONLINE MARCOS CRUZ RASCON

//Fichero junta.js
/*Una vez termine de cargar la página crear un vector con los nombres de las asignaturas.
Recorrer las filas del tbody creando lo objetos Alumno y guardarlos como propiedad de la propia fila
fila.alumno*/

window.addEventListener("load", function() {

    var tabla = document.querySelectorAll("table");
    var cabecera = tabla[0].children[0].rows[0].cells;
    var tamanio = cabecera.length;
    var arrayAsignaturas = [];

    var filas = tabla[0].children[0].firstElementChild;
    filas.insertCell(1).innerText = "Media";
    filas.insertCell(2).innerText = "Suspensas";

    var superior = tabla[0].children[0];
    superior.insertRow();


    for (let i = 1; i < tamanio; i++) {
        arrayAsignaturas.push(cabecera[i].innerText)
    }

    var body = tabla[0].children[1];
    var tamanioBody = body.rows.length;
    for (let i = 0; i < tamanioBody; i++) {
        var arrayNotas = [];
        var fila = body.rows[i];
        var nombre = fila.cells[0].innerText;


        fila.insertCell(1).innerText = "";
        fila.insertCell(2).innerText = "";

        for (let j = 1; j < tamanio; j++) {
            arrayNotas.push(fila.cells[j].innerText)
            fila.alumno = new Alumno(nombre, arrayAsignaturas, arrayNotas)

            if (!parImpar(i)) {
                fila.style.backgroundColor = "#7a787d"
            }
        }
    }

    for (let i = 0; i < tamanioBody; i++) {
        var fila = body.rows[i];
        var celdas = fila.cells;
        var numeroAsignaturas = 0;
        var numeroSuspensas = 0;
        var nota = 0;
        for (let j = 3; j < tamanio; j++) {
            var texto = celdas[j].innerText;
            var transfor = parseInt(texto)

            if (!isNaN(transfor)) {
                nota = nota + transfor;
                numeroAsignaturas++;
                if (transfor < 5) {
                    numeroSuspensas++;
                }
            }
        }

        fila.cells[1].innerText = nota / numeroAsignaturas;
        fila.cells[2].innerText = numeroSuspensas;
    }
})



function parImpar(num) {
    var valor = parseInt(num);
    var tipo = (valor % 2) ? "Impar" : "Par";
    if (tipo == "Par") {
        return true
    } else {
        return false
    }
}