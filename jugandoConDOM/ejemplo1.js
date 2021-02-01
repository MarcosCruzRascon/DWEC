window.addEventListener("load",function(){
    var marco=document.getElementById("marco");
    var ventanas=marco.getElementsByClassName("ventana");
    ventanas[1].style.background="yellow";
    function persiana(objeto) {
        var altura=parseInt(objeto.clientHeight);
        function reducir() {
            objeto.style.height=(--altura)+"px";
            if(altura>0) 
                setTimeout(reducir,10);  
        }
        setTimeout(reducir,10);
    }
    ventanas[1].addEventListener("click",function(){
      /*var clasesActuales=this.getAttribute("class");
        if(clasesActuales.indexOf("oculto")==-1){
            clasesActuales+=" oculto";
            this.setAttribute("class",clasesActuales);
        }*/

        persiana(this);

    })

    ventanas[2].addEventListener("click",function() {
        this.previousElementSibling.style.height="";
    })

})