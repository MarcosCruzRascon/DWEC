/*objeto alumno con nombre, apellido1, apellido 2, fecha nacimiento*/
/*por defecto nacionalidad española(prototipe), funcion nombrecompleto,funcion devuelve edad*/

function Alumno(nombre, apellido1, apellido2, fechaNac)
{
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fechaNac=fechaNac;
}

Alumno.prototype.nacionalidad="Española";



Alumno.prototype.nombreCompleto=function(){
    return this.nombre+" "+this.apellido1+" "+this.apellido2;
}
Alumno.prototype.devuelveEdad=function(){
        var fecha = this.fechaNac;
        var arrayFecha = fecha.split("/");
        var fechaLocal = new Date();
    
        var dia = arrayFecha[0];
        var mes = arrayFecha[1];
        var anio = arrayFecha[2];
        var fechaAntigua = new Date(anio, mes-1, dia);
    
       /* var diferencia = fechaLocal - fechaAntigua;
    
        var anios = ((((((diferencia / 1000) / 60) / 60) / 24)/7)/52);

        anios = Math.trunc(anios);*/

        //tambien se puede hacer con return directamente de
            return (new Date(fechaLocal-fechaAntigua).getFullYear()-1970)
        
        //return anios;
};

Alumno.prototype.presentate=function(){
    return "Hola soy "+this.nombreCompleto();
}

for(prop in obj1){
    if(typeof obj1[prop]!="function")
    {
        console.log(prop+" = "+obj1[prop] + "\n")
    }
    
    
}