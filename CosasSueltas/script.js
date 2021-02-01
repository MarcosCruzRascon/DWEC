//al iniciar actualiza el campo
window.onload=function()
{
    document.getElementById("saludo").innerHTML="MARCOS";
    var total=0;
    
    function aumentaTotal(){
        var total=0; //variable solo existe en bucle no es la de arriba
        total++;
    }
}
  /*  var i=20;
    for(let i=0;i<10;i++)
    {
        console.log(i);
    }
    console.log(i);

    }*/

   /* function suma(){
        document.getElementById("total").value = 
        (document.getElementById("sumando1").value-0) +
        (document.getElementById("sumando2").value-0);
    }*/

   /* function suma(a,b){
       return  (a-0) + (b-0);
    }*/


    
  /*for(i=0;i<100;i++)
    {
        if(i%2==1)
            continue;
        console.log(i);
    }*/
    
//}

/*function edad(a)
{
    if(a>=18)
    {
        return console.log("Mayor de edad")
    }
    else
    {
        return console.log("Menor de edad")
    }

}


function edadMayor(edad)
{
   var respuesta = (edad>=18)?true:false;
    return respuesta

}*/


/*function tablaMultiplicar(numero){
    var respuesta="<table><tbody>";
    var linea;
    for(let i=1;i<=10;i++){
        linea="<tr>";
        linea+="<td>";
        linea+=numero;
        linea+="</td>";
        linea+="<td>";
        linea+="x";
        linea+="</td>";
        linea+="<td>";
        linea+=i;
        linea+="</td>";
        linea+="<td>";
        linea+="=";
        linea+="</td>";
        linea+="<td>";
        linea+=numero*i;
        linea+="</td>";
        linea+="</tr>";

        respuesta+=linea;
    }
    
    respuesta+="</tbody></table>";

    return respuesta;
}


function contarLetras(letra, texto){
    var contador=0;
    for(let i=0; i<texto.length;i++)
    if(texto[i]==letra)
        contador++;

    return contador;
}*/

/*function contar(){
    var inicio=parseInt(document.getElementById("inicio").value);
    var fin=parseInt(document.getElementById("fin").value);
    var texto="";
    for (let i=inicio;i<=fin;i++)
    {
        texto+=i+"<br/>";
    }
    document.getElementById("resultado").innerHTML=texto;
}*/

var listadoOriginal=[];
var listadoOrdenado=[];

function grabar(){
    var nombre=document.getElementById("nombre").value;
    listadoOriginal.push(nombre);
    listadoOrdenado.push(nombre);
    imprimir(listadoOriginal);
}

function imprimir(vector)
{
    document.getElementById("listado").innerHTML = vector.join("<br/>")
}