var el = document.querySelectorAll('.player-options div > img'); //cria uma list com as imagens do jogador
var elEnemy=document.querySelectorAll('.enemy-options div > img');//cria uma list com as imagens do pc
var Opt="", EOpt="";
var vencedor=document.getElementById('vencedor');
var PlacarPlayer=0, PlacarEnemy=0;
var ElPlacarPlayer=document.getElementById("placarP"), ElPlacarEnemy=document.getElementById("placarE");

// enemyOpt gera a opçao do inimigo.
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

//validarVitoria compara os resultados pra definir o vencedor da rodada
function validarVitoria(){    
    vencedor.style.color='black';
    if (Opt == "rock"){
        if(EOpt == "rock"){
            vencedor.innerHTML="Empate!";
        } else if (EOpt == "paper") {
            vencedor.innerHTML='pc ganhou';
            vencedor.style.color='red';
            PlacarEnemy++;
            ElPlacarEnemy.innerHTML=PlacarEnemy;
        } else if (EOpt == "scisor"){
            vencedor.innerHTML='vc ganhou';
            PlacarPlayer++;
            ElPlacarPlayer.innerHTML=PlacarPlayer;
        }
    } else if (Opt == "paper") {
        if(EOpt == "rock"){
            vencedor.innerHTML='vc ganhou';
            PlacarPlayer++;
            console.log(PlacarPlayer);
            ElPlacarPlayer.innerHTML=PlacarPlayer;
        } else if (EOpt == "paper") {
            vencedor.innerHTML='empate!';
        } else if (EOpt == "scisor"){
            vencedor.innerHTML='pc ganhou';
            vencedor.style.color='red';
            PlacarEnemy++;
            ElPlacarEnemy.innerHTML=PlacarEnemy;
        }
    } else if (Opt == "scisor"){
        if(EOpt == "rock"){
            vencedor.innerHTML='pc ganhou';
            vencedor.style.color='red';
            PlacarEnemy++;
            ElPlacarEnemy.innerHTML=PlacarEnemy;
        } else if (EOpt == "paper") {
            vencedor.innerHTML='vc ganhou!';
            PlacarPlayer++;
            ElPlacarPlayer.innerHTML=PlacarPlayer;
            console.log(PlacarPlayer);
        } else if (EOpt == "scisor"){
            vencedor.innerHTML='empate';
        }
    }
}

//reseta a opacidade das imagnes do jogador para a proxima rodada
function resetarOpacidade(){
    for(i=0;i<el.length;i++){
        el[i].style.opacity=0.3;    
    }
}
//reseta a opacidade das imagens do inimigo para a proxima rodada
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


