function fechaValida() {
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");

    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];

    switch (true) {
        case anio < 0:
            alert("invalida");
            break;
        case mes < 0 && mes > 12:
            alert("invalida");
            break;
        case mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12:
            if (dia > 0 && dia <= 31)
                alert("valido");
            break;
        case mes == 4 || mes == 6 || mes == 9 || mes == 11:
            if (dia > 0 && dia <= 30)
                alert("valido")
            break;
        case mes == 2:
            if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0) && (dia > 0 && dia <= 29) || (dia > 0 && dia <= 28)) {
                alert("valido")
            }
            else {
                alert("invalido")
            }

            break;
        default:
            alert("invalido")
            break;
    }
}

function cuentaDias() {
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");
    var fechaLocal = new Date();

    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];
    var fechaAntigua = new Date(anio, mes-1, dia);

    var diferencia = fechaLocal - fechaAntigua;

    var dias = ((((diferencia / 1000) / 60) / 60) / 24);

    alert("Llevas vivo " + Math.round(dias));

}

function diaSemana() {
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");
    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];
    var fechaCompleta = new Date(anio, mes-1, dia);

    var dia = fechaCompleta.getDay();

    switch (dia) {
        case 0:
            alert("Domingo")
            break;

        case 1:
            alert("Lunes")
            break;

        case 2:
            alert("Martes")
            break;

        case 3:
            alert("Miercoles")
            break;

        case 4:
            alert("Jueves")
            break;

        case 5:
            alert("Viernes")
            break;

        case 6:
            alert("Sabado")
            break;
    }
}

function comparaFechas()
{
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");
    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];
    var fechaCompleta = new Date(anio, mes-1, dia);

    var fecha2 = document.getElementById("fechaComparacion").value;
    var arrayFecha2 = fecha.split("/");
    var dia2 = arrayFecha[0];
    var mes2 = arrayFecha[1];
    var anio2 = arrayFecha[2];
    var fechaCompleta = new Date(anio2, mes2-1, dia2);
    var imprimir;
    if(fecha>fecha2)
    {
        imprimir= "1";
    }
    else if(fecha2>fecha)
    {
        imprimir =  "-1";
    }
    else
    {
        imprimir= "0";
    }

    document.getElementById("comparacion").innerHTML = imprimir;

}

function eresMayor()
{
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");
    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];
    var fechaCompleta = new Date(parseInt(anio), mes-1, dia);
    var fechaActual = new Date();
    var anioMayoria = fechaCompleta.getFullYear() +18;
    var fechaMayoria = new Date(anioMayoria, fechaCompleta.getMonth(), fechaCompleta.getDate());
    
    
    if(fechaActual<fechaMayoria)
    {
        alert("No puedes beber un cubata no eres mayor de edad")
    }
    else
    {
        alert("Puedes beber un cubata eres mayor de edad")
    }
}


function cuentaDiasBeber()
{
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");
    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];
    var fechaCompleta = new Date(parseInt(anio), mes-1, dia);
    var fechaActual = new Date();
    var anioMayoria = fechaCompleta.getFullYear() +18;
    var fechaMayoria = new Date(anioMayoria, fechaCompleta.getMonth(), fechaCompleta.getDate());
    if((fechaActual-fechaMayoria)>=0)
    {
        alert("Ya puedes beber alcohol")
    }
    else
    {

        var diferencia = fechaActual-fechaMayoria;
        var dias = ((((diferencia / 1000) / 60) / 60) / 24); 
        alert("No puedes beber te queda "+ Math.abs(Math.round(dias))+" dia/s para poder beber")
    }
}

function jubilacion()
{
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");
    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];
    var fechaCompleta = new Date(parseInt(anio), mes-1, dia);
    var fechaActual = new Date();
    var anioJubilacion = fechaCompleta.getFullYear()+67;
    var fechaJubilacion = new Date(anioJubilacion, fechaCompleta.getMonth(), fechaCompleta.getDate());

    if((fechaActual-fechaJubilacion)>=0)
    {
        alert("Ya estas jubilado")
    }
    else
    {

        var diferencia = fechaActual-fechaJubilacion;
        var anios = ((((((((diferencia / 1000) / 60) / 60)/24)/7)/52))); 
        alert("Te quedan "+Math.abs(Math.round(anios))+" año/s para jubilarte")
    }
}

function tiempoJubilacion()
{
    var fecha = document.getElementById("fecha").value;
    var arrayFecha = fecha.split("/");
    var dia = arrayFecha[0];
    var mes = arrayFecha[1];
    var anio = arrayFecha[2];
    var fechaCompleta = new Date(parseInt(anio), mes-1, dia);
    var fechaActual = new Date();
    var anioJubilacion = fechaCompleta.getFullYear()+67;
    var fechaJubilacion = new Date(anioJubilacion, fechaCompleta.getMonth(), fechaCompleta.getDate());

    if((fechaActual-fechaJubilacion)>=0)
    {
        alert("Ya estas jubilado")
    }
    else
    {

        var diferencia = fechaActual-fechaJubilacion;
        var tiempoRestante = new Date(diferencia);
        tiempoRestante.setFullYear(tiempoRestante.getFullYear()-1970)
        alert("Te quedan "+tiempoRestante.getFullYear()*(-1)+" años, "+tiempoRestante.getMonth()+" meses y "+tiempoRestante.getDate()+" dias")
        
    }
}


