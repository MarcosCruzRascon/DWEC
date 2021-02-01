var Empresa = {
    nombre: "Horarios S.L.",
    empleados: [],
    horario: ["09:00-18:00"],
    maximoPersonas: 10,
    trabjandoSimultaneo: ""
}

var Trabajador = function(dni, nombre, horasContrato) {
    this.dni = dni;
    this.nombre = nombre;
    this.horasContrato = horasContrato;
    this.estado = 0;
    this.periodosTrabajo = [];
    this.periodosDescanso = [];
    this.comienzoT = "";
    this.comienzoD = "";
}

Empresa.formatearHora = function(date = new Date()) {
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

Trabajador.prototype.comenzarT = function() {
    this.comienzoT = new Date();
    this.estado = 1;
}

Trabajador.prototype.parar = function() {
    var ahora = new Date();
    var periodo = [];
    var comienzo = new Date(this.comienzoT)
    periodo[0] = comienzo.getTime();
    periodo[1] = ahora.getTime();
    this.periodosTrabajo.push(periodo);
    this.estado = 0;
}

Trabajador.prototype.descansar = function() {
    var ahora = new Date();
    var periodoDescanso = [];
    if (this.estado == 1) {
        this.comienzoD = ahora;
        this.estado = 2;
    } else {
        var comienzo = new Date(this.comienzoD)
        periodoDescanso[0] = comienzo.getTime();
        periodoDescanso[1] = ahora.getTime();
        this.estado = 1;
        this.periodosDescanso.push(periodoDescanso);
    }

}


Empresa.pintaTrabajando = function() {
    var table = document.getElementById("trabajando").tBodies[0];

    table.innerHTML = "";

    for (trabajador of Empresa.empleados) {
        if (trabajador.estado == 1) {

            var row = table.insertRow(0);
            row.trabajador = trabajador;
            var celda = row.insertCell(0);
            celda.innerHTML = trabajador.dni;


            celda = row.insertCell(1);
            celda.innerHTML = trabajador.nombre;
            celda = row.insertCell(2);
            celda.innerHTML = trabajador.comienzoT.toLocaleString();

            celda = row.insertCell(3);
            celda.innerHTML = trabajador.periodosDescanso.length;
        }
    }
}

Empresa.pintaDescansando = function() {
    var table = document.getElementById("descansando").tBodies[0];

    table.innerHTML = "";

    for (trabajador of Empresa.empleados) {
        if (trabajador.estado == 2) {

            var row = table.insertRow(0);
            row.trabajador = trabajador;
            var celda = row.insertCell(0);
            celda.innerHTML = trabajador.dni;


            celda = row.insertCell(1);
            celda.innerHTML = trabajador.nombre;
            celda = row.insertCell(2);
            celda.innerHTML = trabajador.comienzoT.toLocaleString();
        }
    }
}

function pintaEstadistica() {

}


function fichar() {
    var dniNormal = document.getElementById("dniTrabajar").value;
    var dni = dniNormal.toUpperCase();
    for (let i = 0; i < Empresa.empleados.length; i++) {
        if (Empresa.empleados[i].dni == dni) {
            if (Empresa.empleados[i].estado == 0) {
                if (Empresa.trabjandoSimultaneo < Empresa.maximoPersonas) {
                    Empresa.empleados[i].comenzarT();
                }
            } else if (Empresa.empleados[i].estado == 1) {
                document.getElementById("descansarParar").style.display = "block";
                this.style.display = "none";
            } else if (Empresa.empleados[i].estado == 2) {
                Empresa.empleados[i].descansar();
                document.getElementById("descansarParar").style.display = "none";
                document.getElementById("fichar").style.display = "inline";
            }
        }
    }
    Empresa.pintaTrabajando();
}

function para() {
    var dni = document.getElementById('dniTrabajar').value;
    for (let i = 0; i < Empresa.empleados.length; i++) {
        if (Empresa.empleados[i].dni == dni) {
            Empresa.empleados[i].parar();
            document.getElementById("descansarParar").style.display = "none";
            document.getElementById("fichar").style.display = "inline";
        }
    }
    window.localStorage.setItem('empresa', JSON.stringify(Empresa));
}

function descansa() {
    var dni = document.getElementById('dniTrabajar').value;
    for (let i = 0; i < Empresa.empleados.length; i++) {
        if (Empresa.empleados[i].dni == dni) {
            Empresa.empleados[i].descansar();
            document.getElementById("descansarParar").style.display = "none";
            document.getElementById("fichar").style.display = "inline";
        }
    }
}


Empresa.pintaEmpleados = function() {
    var table = document.getElementById("empleados").tBodies[0];

    table.innerHTML = "";
    for (trabajador of Empresa.empleados) {
        var row = table.insertRow(0);
        row.trabajador = trabajador;

        var celda = row.insertCell(0)
        var inputNombre = document.createElement("input");
        inputNombre.id = "nombreTabla";
        inputNombre.value = trabajador.nombre;
        celda.appendChild(inputNombre);

        celda = row.insertCell(1)
        var inpuDNI = document.createElement("input");
        inpuDNI.id = "id";
        inpuDNI.readOnly = true;
        inpuDNI.value = trabajador.dni;
        celda.appendChild(inpuDNI);


        celda = row.insertCell(2)
        var inputHoras = document.createElement("input");
        inputHoras.id = "horas";
        inputHoras.type = "number";
        inputHoras.value = trabajador.horasContrato;
        celda.appendChild(inputHoras);


        celda = row.insertCell(3);
        var btnDespedir = document.createElement("button");
        btnDespedir.innerHTML = "Despedir";
        btnDespedir.addEventListener("click", despedir);

        var btnEditar = document.createElement("button");
        btnEditar.innerHTML = "Guardar";
        btnEditar.addEventListener("click", editar);

        celda.appendChild(btnEditar);
        celda.appendChild(btnDespedir);

    }
}

Empresa.pintaEmpresa = function() {

    document.getElementById("nombreEmpresa").value = Empresa.nombre;
    horas = Empresa.horario[0].split("-");
    document.getElementById("hInicio").value = horas[0];
    document.getElementById("hFin").value = horas[1];
    document.getElementById("maxPersonas").value = Empresa.maximoPersonas;



}

function editar() {
    var trabajador = this.parentElement.parentElement.trabajador;
    var nombre = this.parentElement.parentElement.children[0].children[0].value;
    var dni = this.parentElement.parentElement.children[1].children[0].value;
    var nuevasHoras = parseInt(this.parentElement.parentElement.children[2].children[0].value);

    trabajador.nombre = nombre;
    trabajador.dni = dni;
    trabajador.horasContrato = nuevasHoras;

    for (let i = 0; i < Empresa.empleados.length; i++) {
        if (Empresa.empleados[i].dni == dni) {
            Empresa.empleados[i] = trabajador;
        }
    }

    window.localStorage.setItem('empresa', JSON.stringify(Empresa));

}

function despedir() {
    var dni = this.parentElement.parentElement.trabajador.dni;
    var empleado = Empresa.empleados;

    for (let i = 0; i < Empresa.empleados.length; i++) {
        if (Empresa.empleados[i].dni == dni) {
            empleado.splice(i, 1);
        }
    }
    Empresa.empleados = empleado;
    window.localStorage.setItem('empresa', JSON.stringify(Empresa));
    Empresa.pintaEmpleados();
}

function editarEmpresa() {
    Empresa.nombre = document.getElementById("nombreEmpresa").value;
    horas = Empresa.horario[0].split("-");
    horasInicio = document.getElementById("hInicio").value;
    horasFin = document.getElementById("hFin").value;
    stringHorario = horasInicio + "-" + horasFin;
    Empresa.horario[0] = stringHorario;
    Empresa.maximoPersonas = document.getElementById("maxPersonas").value;

    window.localStorage.setItem('empresa', JSON.stringify(Empresa));
}

function recuperarEmpresa() {
    var empresa = localStorage.getItem('empresa');
    var EmpresaRecuperada = JSON.parse(empresa);
    Empresa.nombre = EmpresaRecuperada.nombre;
    for (let i = 0; i < EmpresaRecuperada.empleados.length; i++) {
        var dni = EmpresaRecuperada.empleados[i].dni;
        var nombre = EmpresaRecuperada.empleados[i].nombre;
        var horasContrato = EmpresaRecuperada.empleados[i].horasContrato;

        var trabajador = new Trabajador(dni, nombre, horasContrato);
        Empresa.empleados.push(trabajador);
    }
}

Date.prototype.getWeekNumber = function() {
    var d = new Date(+this);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
};

window.addEventListener("load", function() {
    if (localStorage.getItem('empresa') == null) {
        window.localStorage.setItem('empresa', JSON.stringify(Empresa));
    } else {
        recuperarEmpresa();
    }

    document.getElementById("fichar").addEventListener('click', fichar);

    document.getElementById("nuevoEmpleado").addEventListener("click", function() {
        var dni = document.getElementById("dni").value;
        var dniAniadir = dni.toUpperCase();
        var horasContratadas = document.getElementById("horasContrato").value;
        var nombre = document.getElementById("nombre").value;
        var aniadir = true;

        for (let i = 0; i < Empresa.empleados.length; i++) {
            if (Empresa.empleados[i].dni != dniAniadir) {
                if (dniAniadir != null && horasContratadas != null && nombre != null) {
                    aniadir = true;
                }

            } else {
                aniadir = false;
                break;
            }

        }

        if (aniadir) {
            var trabajador = new Trabajador(dniAniadir, nombre.toUpperCase(), horasContratadas);
            Empresa.empleados.push(trabajador);
            window.localStorage.setItem('empresa', JSON.stringify(Empresa));
            Empresa.pintaEmpleados();
        } else {
            alert("No se ha podido añadir al empleado")
        }
    })


    document.getElementById("contratarNuevo").addEventListener('click', function() {
        var contratacion = document.getElementById("contratacion");
        contratacion.style.display = "block";
    })



    setInterval(Empresa.pintaTrabajando, 500);
    setInterval(Empresa.pintaDescansando, 500);
    //setInterval(Empresa.pintaNoTrabajando, 500)

    Empresa.pintaEmpleados();
    Empresa.pintaEmpresa();


    document.getElementById("parar").addEventListener('click', para)
    document.getElementById("descansar").addEventListener('click', descansa)

    document.getElementById("menuTrabajadores").addEventListener('click', function() {

        var main = menuTrabajadores.parentNode.parentNode.children[2];
        for (let i = 0; i < main.childElementCount; i++) {
            if (main.children[i].getAttribute('id') == "trabajadores") {
                main.children[i].style.display = "block"
            } else {
                main.children[i].style.display = "none"
            }
        }
    })

    document.getElementById("menuEmpresa").addEventListener('click', function() {

        var main = menuTrabajadores.parentNode.parentNode.children[2];
        for (let i = 0; i < main.childElementCount; i++) {
            if (main.children[i].getAttribute('id') == "empresa") {
                main.children[i].style.display = "block"
            } else {
                main.children[i].style.display = "none"
            }
        }
    })


    document.getElementById("menuFichar").addEventListener('click', function() {

        var main = menuTrabajadores.parentNode.parentNode.children[2];
        for (let i = 0; i < main.childElementCount; i++) {
            if (main.children[i].getAttribute('id') == "divFichar") {
                main.children[i].style.display = "block"
            } else {
                main.children[i].style.display = "none"
            }
        }
    })

    document.getElementById("modificaEmpresa").addEventListener('click', editarEmpresa)

})