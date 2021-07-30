var el = document.querySelectorAll('.player-options div > img');
var Opt="";

function resetarOpacidade(){
    for(i=0;i<el.length;i++){
        el[i].style.opacity=0.3;    
    }
}
for(i=0;i<el.length;i++){
    el[i].addEventListener('click',(t)=>{
        resetarOpacidade();
        t.target.style.opacity=1;
        Opt=t.target.getAttribute('opt');
        alert(Opt);
    })
}