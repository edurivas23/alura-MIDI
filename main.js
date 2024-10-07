
const listaSonidos = document.querySelectorAll('.tecla');

function playSonido(idSonido){
    document.querySelector(idSonido).play();
}
console.log(listaSonidos.length)
for(let i=0 ; i < listaSonidos.length; i++){
    const tecla = listaSonidos[i];
    const instrumento = tecla.classList[1];
    
    tecla.onclick = function(){
        playSonido(`#sonido_${instrumento}`);   
    };
    tecla.onkeydown = function(evento){
      if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('activa');
      }
      else{

      }
    }
    tecla.onkeyup = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.remove('activa');
          }
       
    }
}

