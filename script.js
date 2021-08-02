var el = document.querySelectorAll('.player-options div > img');
var elEnemy=document.querySelectorAll('.enemy-options div > img');
var Opt="", EnemyOpt="";

function enemyOpt(){
    let randN=Math.floor(Math.random()*3);//gerar numero aletorio entre 0 e 2
    const enemyOptions=document.querySelectorAll('.enemy-options div');
    for(i=0;i<enemyOptions.length;i++){
        if(i==randN){
            enemyOptions[i].childNodes[0].style.opacity=1;
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
    })
}
let x=document.querySelectorAll('.enemy-options');
console.log(x[0].children[0].children[0]);
