function CalcularMedalhas(){

    var medalhas_br = parseInt(document.getElementById("ouro_brasil").value) + parseInt(document.getElementById("prata_brasil").value) + parseInt(document.getElementById("bronze_brasil").value);
   document.getElementById("medalhas_brasil").value = medalhas_br;

   var medalhas_chin = parseInt(document.getElementById("ouro_china").value) + parseInt(document.getElementById("prata_china").value) + parseInt(document.getElementById("bronze_china").value);
   document.getElementById("medalhas_china").value = medalhas_chin; 

   var medalhas_fran = parseInt(document.getElementById("ouro_franca").value) + parseInt(document.getElementById("prata_franca").value) + parseInt(document.getElementById("bronze_franca").value);
   document.getElementById("medalhas_franca").value = medalhas_fran; 

   var medalhas_usa = parseInt(document.getElementById("ouro_estadosunidos").value) + parseInt(document.getElementById("prata_estadosunidos").value) + parseInt(document.getElementById("bronze_estadosunidos").value);
   document.getElementById("medalhas_estadosunidos").value = medalhas_usa; 

   var medalhas_arg = parseInt(document.getElementById("ouro_argentina").value) + parseInt(document.getElementById("prata_argentina").value) + parseInt(document.getElementById("bronze_argentina").value);
   document.getElementById("medalhas_argentina").value = medalhas_arg;

}










