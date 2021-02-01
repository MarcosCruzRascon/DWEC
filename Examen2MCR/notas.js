//ONLINE MARCOS CRUZ RASCON

//FICHERO NOTAS

//Contructor para objeto Alumno. 
//Donde: nombre es el nombre del alumno
//       asignaturas es el vector de asignaturas 
//       notas es el vector de punteros a los tds que contienen las notas notas del alumno.
/*Propiedades
    nombre
    asignaturas
    notas

*/
function Alumno(nombre, asignaturas, notas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
    this.notas = notas;
}



//objeto.nota(asig) 
//método de Alumno que pasádole la asignatura o la posición de la misma devuelve la nota
//numérico entero 0-10 o "APRO" y null si no existe la asignatura o posición
Alumno.prototype.nota = function(asign) {

    var asignatura = parseInt(asign);
    var nota;

    if (!isNaN(asignatura)) {
        nota = this.notas[asign]
    } else {
        var numAsignatura;
        for (let i = 0; i < this.asignaturas.length; i++) {
            if (this.asignaturas[i].localeCompare(asign.toUpperCase()) == 0) {
                numAsignatura = i;
            }
        }
        nota = this.notas[numAsignatura];
    }

    return nota
}


//objeto.setNota(asig,nota)
//método de Alumno que pasádole la asignatura o la posición de la misma y un valor entre 0 y 10 modifica la nota

Alumno.prototype.setNota = function(asignCambiar, nuevaNota) {
    var asignatura = parseInt(asignCambiar);
    if (!isNaN(asignatura)) {
        this.notas[asignCambiar] = nuevaNota;
    } else {
        var numAsignatura;
        for (let i = 0; i < this.asignaturas.length; i++) {
            if (this.asignaturas[i].localeCompare((asignCambiar.toUpperCase())) == 0) {
                numAsignatura = i;
            }
        }
        this.notas[numAsignatura] = nuevaNota;
    }
}