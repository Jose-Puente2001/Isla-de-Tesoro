
const altura = 500;
const anchura = 800;

function mapa (){
  
   x: numero_Aleatorio(altura)
   y: numero_Aleatorio(anchura)

}

let tesoro = document.getElementById('img')
 tesoro.addEventListener("click", function (e){

	console.log ("click");
});




function numero_Aleatorio(size){
 
  return Math.floor(Math.randon() * size);


}

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


