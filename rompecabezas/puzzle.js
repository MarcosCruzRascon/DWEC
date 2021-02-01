/*Software para generar un puzzle*/
window.addEventListener("load",function(){
    document.getElementById("jugar").addEventListener("click",function(){
        var tds=document.querySelectorAll("tbdoy#puzzle td");
        var spans=document.querySelectorAll("tbdoy#puzzle span");
        var hueco=document.getElementById("hueco");
    
        var vector=[];
        for (let i = 0; i < spans.length; i++) {
            vector.push(spans[i]);
            
        }
    
        vector.sort(function(a,b){return Math.random()-0.5});
    
    
        for (let i=0;i<tds.length;i++)
        {
            tds[i].appendChild(vector[i]);
        }
    });   
});