var Instituto = {
    nombre: "IES LAS FUENTEZUELAS",
    clase: "",
    alumnos: [],
}

Instituto.guardar = function() {
    var cadenaJSON;
    cadenaJSON = JSON.stringify(this);
    localStorage.setItem("datosInstituto", cadenaJSON);
}
Instituto.restaurar = function() {
    var cadena = localStorage.getItem("datosInstituto");
    if (cadena) {
        var obj = JSON.parse(cadena);
        this.nombre = obj.nombre;
        this.clase = obj.clase;
        var numAlumnos = obj.alumnos.length;
        for (let i = 0; i < numAlumnos; i++) {
            this.matricular(new Alumno(obj.alumnos[i].nombre,
                obj.alumnos[i].ape1,
                obj.alumnos[i].ape2,
                obj.alumnos[i].fechaNac))
        }
    }
}

function Alumno(nombre, ape1, ape2, fechaNac) {
    this.nombre = nombre;
    this.ape1 = ape1;
    this.ape2 = ape2;
    this.fechaNac = fechaNac;
}

Instituto.matricular = function(alumno) {
    this.alumnos.push(alumno);
    this.imprimir();
}

Instituto.desmatricular = function(indAlumno) {
    this.alumnos.splice(indAlumno, 1);
    this.imprimir();
}

Instituto.imprimir = function() {
    var respuesta = "";
    var tbody = document.getElementById("listado");
    var numAlumnos = this.alumnos.length;
    for (let i = 0; i < numAlumnos; i++) {
        respuesta += "<tr><td>";
        respuesta += this.alumnos[i].nombre;
        respuesta += "</td><td>";
        respuesta += this.alumnos[i].ape1;
        respuesta += "</td><td>";
        respuesta += this.alumnos[i].ape2;
        respuesta += "</td><td>";
        respuesta += this.alumnos[i].fechaNac;
        respuesta += "</td><td>";
        respuesta += "<button onclick='Instituto.desmatricular(" + i + ");Instituto.guardar()'>Borrar</button";
        respuesta += "</td></tr>";


    }
    tbody.innerHTML = respuesta;
}

window.addEventListener("load", function() {
    var botMatricular = document.getElementById("matricular");
    botMatricular.onclick = function() {
        var nombre = document.getElementById("nombre").value;
        var ape1 = document.getElementById("ape1").value;
        var ape2 = document.getElementById("ape2").value;
        var fechaNac = document.getElementById("fNacimiento").value;
        if (nombre != "" && ape1 != "" && ape2 != "" && fechaNac != "") {
            Instituto.matricular(new Alumno(nombre, ape1, ape2, fechaNac));
            Instituto.guardar();
        }


    }
    cabNombre.onclick = function() {
        Instituto.alumnos.sort(function(a, b) {

            return a.nombre.localeCompare(b.nombre);
        });
        Instituto.guardar();
        Instituto.imprimir();
    }
    cab1Apell.onclick = function() {
        Instituto.alumnos.sort(function(a, b) {

            return a.ape1.localeCompare(b.ape1);
        });
        Instituto.guardar();
        Instituto.imprimir();
    }
    cab2Apell.onclick = function() {
        Instituto.alumnos.sort(function(a, b) {

            return a.ape2.localeCompare(b.ape2);
        });
        Instituto.guardar();
        Instituto.imprimir();
    }
    cabFNacim.onclick = function() {
        Instituto.alumnos.sort(function(a, b) {

            return a.fechaNac.localeCompare(b.fechaNac);
        });
        Instituto.guardar();
        Instituto.imprimir();
    }
    Instituto.restaurar();
    Instituto.imprimir();
})