//PRESENCIAL MARCOS CRUZ RASCON

//Fichero junta.js
/*Una vez termine de cargar la página crear un vector con los nombres de las asignaturas.
Recorrer las filas del tbody creando lo objetos Alumno y guardarlos como propiedad de la propia fila
fila.alumno*/

window.addEventListener("load", function() {

    var tabla = document.querySelectorAll("table");
    var cabecera = tabla[0].children[0].rows[0].cells;
    var tamanio = cabecera.length;
    var arrayAsignaturas = [];

    for (let i = 1; i < tamanio; i++) {
        arrayAsignaturas.push(cabecera[i].innerText)
    }

    var body = tabla[0].children[1];
    var tamanioBody = body.rows.length;

    for (let i = 0; i < tamanioBody; i++) {

        var arrayNotas = [];
        var fila = body.rows[i];
        var nombre = fila.cells[0].innerText;
        for (let j = 1; j < tamanio; j++) {
            arrayNotas.push(fila.cells[j].innerText)
                /* var nota = parseInt(fila.cells[j].innerText);
                 if (!isNaN(nota)) {
                     fila.cells[j].addEventListener("dbclick", function() {
                         if (this.contentEditable == false) {
                             this.contentEditable = true
                         } else {
                             this.contentEditable = false
                         }
                     })
                 }*/
            fila.alumno = new Alumno(nombre, arrayAsignaturas, arrayNotas)

            if (!parImpar(i)) {
                fila.style.backgroundColor = "#7a787d"
            }

        }
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