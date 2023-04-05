var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle ='lightgray';
pincel.fillRect(0,0,600,400);

function desenhaCirculo(x,y, raio){
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio,0, 2*Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.clearRect(0,0,600,400);
}


function exibeMensagemNoConsole (){
    console.log('Chamei função');
}
var x=20;
function atualizaTela (){
    limpaTela();
    desenhaCirculo(x,20,10);
    x++;
}
setInterval(atualizaTela,20);
    














/*function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x , y, 10,0,2 * 3.14);
    pincel.fill();
    console.log(x + ','+ y);
    
    
}
tela.onclick = desenhaCirculo;*/

