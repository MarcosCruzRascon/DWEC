var Empresa = {
    empleados: [],
    trabajando: [],
    parados: []
}

var Trabajador = function(dni) {
    this.dni = dni;
    this.horaInicio = new Date();
    this.estado = 1;

    this.horaUltimoDescando = this.horaInicio;
    this.tiempoAcumulado = 0;
    this.crono = 0;
    this.calcularTiempo = function() {
        if (this.estado == 1) {
            this.crono = this.tiempoAcumulado + (Math.round((new Date().getTime() - this.horaUltimoDescando.getTime()) / (1000)));
        } else {
            this.tiempoAcumulado = this.crono;
        }
    }
}

Empresa.formatearHora = function(date = new Date()) {
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

Empresa.pintaTrabajando = function() {
    var table = document.getElementById("trabajadores").tBodies[0];

    table.innerHTML = "";

    for (trabajador of Empresa.trabajando) {
        trabajador.calcularTiempo();
        var row = table.insertRow(0);
        row.trabajador = trabajador;
        var celda = row.insertCell(0);
        celda.innerHTML = trabajador.dni;


        celda = row.insertCell(1);
        celda.innerHTML = Empresa.formatearHora(trabajador.horaInicio);
        celda = row.insertCell(2);
        celda.innerHTML = trabajador.crono + " Segundos";

        celda = row.insertCell(3);
        var btnDescanso = document.createElement("button");
        btnDescanso.innerHTML = "Descanso";
        btnDescanso.addEventListener("click", clickDescanso);

        var bntSeguir = document.createElement("button");
        bntSeguir.innerHTML = "Seguir";
        bntSeguir.addEventListener("click", clickSeguir);

        var bntParar = document.createElement("button");
        bntParar.innerHTML = "Parar";
        bntParar.addEventListener("click", clickParar);

        celda.appendChild(btnDescanso);
        celda.appendChild(bntSeguir);
        celda.appendChild(bntParar);
    }
}

Empresa.pintaNoTrabajando = function() {
    var table = document.getElementById("parados").tBodies[0];

    table.innerHTML = "";
    for (trabajador of Empresa.parados) {
        var row = table.insertRow(0);
        row.trabajador = trabajador;
        var celda = row.insertCell(0);
        celda.innerHTML = trabajador.dni;

        celda = row.insertCell(1);
        celda.innerHTML = Empresa.formatearHora(trabajador.horaInicio);
        celda = row.insertCell(2);
        celda.innerHTML = trabajador.crono + " Segundos";
    }
}

function clickDescanso() {
    this.parentElement.parentElement.trabajador.estado = 2;

}

function clickSeguir() {
    this.parentElement.parentElement.trabajador.horaUltimoDescando = new Date();
    this.parentElement.parentElement.trabajador.estado = 1;
}

function clickParar() {
    var trabajador = this.parentElement.parentElement.trabajador;
    trabajador.estado = 3;
    var i = Empresa.trabajando.indexOf(trabajador);
    if (i >= 0) {
        Empresa.trabajando.splice(i, 1);
    }
    Empresa.parados.push(trabajador);
}

window.addEventListener("load", function() {

    document.getElementById("fichar").addEventListener("click", function() {
        var trabajador = new Trabajador(this.previousElementSibling.value);
        Empresa.empleados.push(trabajador);
        Empresa.trabajando.push(trabajador);
        Empresa.pintaTrabajando();
    })


    setInterval(Empresa.pintaTrabajando, 500);
    setInterval(Empresa.pintaNoTrabajando, 500)


})