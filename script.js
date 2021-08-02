var el = document.querySelectorAll('.player-options div > img');
var elEnemy=document.querySelectorAll('.enemy-options div > img');
var Opt="", EOpt="";
var vencedor=document.getElementById('vencedor');

function enemyOpt(){
    let randN=Math.floor(Math.random()*3);//gerar numero aletorio entre 0 e 2
    const enemyOptions=document.querySelectorAll('.enemy-options div');
    for(i=0;i<enemyOptions.length;i++){
        if(i==randN){
            enemyOptions[i].childNodes[0].style.opacity=1;
            EOpt=document.querySelectorAll('.enemy-options div > img')[i].getAttribute('opt');
        }
    }
}
function validarVitoria(){    
    vencedor.style.color='black';
    if (Opt == "rock"){
        if(EOpt == "rock"){
            vencedor.innerHTML="Empate!";
        } else if (EOpt == "paper") {
            vencedor.innerHTML='pc ganhou';
            vencedor.style.color='red';
        } else if (EOpt == "scisor"){
            vencedor.innerHTML='vc ganhou';
        }
    } else if (Opt == "paper") {
        if(EOpt == "rock"){
            vencedor.innerHTML='vc ganhou';
        } else if (EOpt == "paper") {
            vencedor.innerHTML='empate!';
        } else if (EOpt == "scisor"){
            vencedor.innerHTML='pc ganhou';
            vencedor.style.color='red';
        }
    } else if (Opt == "scisor"){
        if(EOpt == "rock"){
            vencedor.innerHTML='pc ganhou';
            vencedor.style.color='red';
        } else if (EOpt == "paper") {
            vencedor.innerHTML='vc ganhou!';
        } else if (EOpt == "scisor"){
            vencedor.innerHTML='empate';
        }
    }
}
function resetarOpacidade(){
    for(i=0;i<el.length;i++){
        el[i].style.opacity=0.3;    
    }
}
function resetarOpacidadeEnemy(){
    for(i=0;i<elEnemy.length;i++){
        elEnemy[i].style.opacity=0.3;    
    }
}
for(i=0;i<el.length;i++){
    el[i].addEventListener('click',(t)=>{
        resetarOpacidade();
        resetarOpacidadeEnemy();
        t.target.style.opacity=1;
        Opt=t.target.getAttribute('opt');
        enemyOpt();
        validarVitoria();
    })
}


