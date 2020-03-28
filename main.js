
const altura = 500;
const anchura = 800;

 var mapa = {
  
   x: getRandomNumber(altura),
   y: getRandomNumber(anchura)

};

let tesoro = document.getElementById('img')
let longitud = document.getElementById ('trecho')

 tesoro.addEventListener("click", function (e){
   let evento = Distancia(e, mapa)
  let distanciaHint =  Distance (evento)
  longitud.innerHTML= ` <h1> ${distanciaHint}</h1> `

  if (evento< 20){

     alert ("haz encontrado el tesoro")
     location.reload();
  }
    
});



//la funcion que genera el numero aleatorio
function getRandomNumber(size){
 
  return Math.floor(Math.random() * size);


}

//calculo de la distancia aqui se aplico teorema de pitagora
function Distancia (e, targert){

   var distanciaX = e.offsetX - targert.x
   var distanciaY = e.offsetY - targert.y
   return Math.sqrt ((distanciaX * distanciaX) + (distanciaY * distanciaY))
}


function Distance (distancia){
  
    
   if(distancia < 30){

     return "Estas muy cerca"

   }

   else if (distancia < 40){

   	return "cerca"
   }

   else if (distancia < 70){

   	 return "Te estas aproximando"
   }

   else if (distancia < 100){

      return "Esta un poco lejo"

   }

   else if (distancia < 180){

   	  return "esta lejo"
   }

   else if (distancia < 400){

   	 return "esta demasiado lejo"
   }

} 


