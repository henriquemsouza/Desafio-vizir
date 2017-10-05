var botao=document.getElementById("botao");

function calck() {
    // obtém tempo digitado pelo usuário 
    var tempoVar=document.getElementById("tempo").value;
    // obtém var selecionado pelo usuário
    var origemVar=document.getElementById("origem").value;
    var destinovar=document.getElementById("destino").value;
    var planovar=document.getElementById("plano").value;
    
    var nda = "-"
    

    if (origemVar === "011") { 
        switch (destinovar)
        {
         case "011":
         valorSemFalemais = tempoVar*ddd11PorMinPLUS(0.9,tempoVar)
         valorComFalemais = (tempoVar*0.9).toFixed(2);
         break;
         case "016":
         valorSemFalemais = tempoVar*ddd16PorMinPLUS(2.9, tempoVar)
         valorComFalemais = (tempoVar*2.9).toFixed(2);
         break; 
         case "017":
         valorSemFalemais = tempoVar*ddd17PorMinPLUS(2.7, tempoVar)
         valorComFalemais = (tempoVar*2.7).toFixed(2); 
         break;
         case "018":
         valorSemFalemais = tempoVar*ddd18PorMinPLUS(1.9, tempoVar)
         valorComFalemais = (tempoVar*1.9).toFixed(2);
         break;
           
        }
       
    }
     if (origemVar === "016") { 
        switch (destinovar)
        {
         case "011":
         valorSemFalemais = tempoVar*ddd11PorMinPLUS(0.91, tempoVar)
         valorComFalemais = (tempoVar*0.91).toFixed(2);
         break;
         case "016":
         valorSemFalemais = tempoVar*ddd16PorMinPLUS(2.91, tempoVar)
         valorComFalemais = (tempoVar*2.91).toFixed(2);
         break; 
         case "017":
         valorSemFalemais = tempoVar*ddd17PorMinPLUS(2.17, tempoVar)
         valorComFalemais = (tempoVar*2.71).toFixed(2); 
         break;
         case "018":
         valorSemFalemais = tempoVar*ddd18PorMinPLUS(1.91, tempoVar)
         valorComFalemais = (tempoVar*1.91).toFixed(2);
         break;
           
        }
       
    }
    if (origemVar === "017") { 
        switch (destinovar)
        {
         case "011":
         valorSemFalemais = tempoVar*ddd11PorMinPLUS(0.92, tempoVar)
         valorComFalemais = (tempoVar*0.92).toFixed(2);
         break;
         case "016":
         valorSemFalemais = tempoVar*ddd16PorMinPLUS(2.92, tempoVar)
         valorComFalemais = (tempoVar*2.92).toFixed(2);
         break; 
         case "017":
         valorSemFalemais = tempoVar*ddd17PorMinPLUS(2.72, tempoVar)
         valorComFalemais = (tempoVar*2.72).toFixed(2); 
         break;
         case "018":
         valorSemFalemais = tempoVar*ddd18PorMinPLUS(1.92, tempoVar)
         valorComFalemais = (tempoVar*1.92).toFixed(2);
         break;
           
        }
       
    }
    if (origemVar === "018") { 
        switch (destinovar)
        {
         case "011":
         valorSemFalemais = tempoVar*ddd11PorMinPLUS(0.93, tempoVar)
         valorComFalemais = (tempoVar*0.93).toFixed(2);
         break;
         case "016":
         valorSemFalemais = tempoVar*ddd16PorMinPLUS(2.93, tempoVar)
         valorComFalemais = (tempoVar*2.93).toFixed(2);
         break; 
         case "017":
         valorSemFalemais = tempoVar*ddd17PorMinPLUS(2.73, tempoVar)
         valorComFalemais = (tempoVar*2.73).toFixed(2); 
         break;
         case "018":
         valorSemFalemais = tempoVar*ddd18PorMinPLUS(1.93, tempoVar)
         valorComFalemais = (tempoVar*1.93).toFixed(2);
         break;
           
        }
       
    }

    if( tempoVar<=planovar)
    {
    document.getElementById("SemFalemais").textContent = "R$:"+valorSemFalemais; 
    document.getElementById("ComFalemais").textContent = nda; 
    }
    else
    {
    document.getElementById("SemFalemais").textContent = "R$:"+valorSemFalemais; 
    document.getElementById("ComFalemais").textContent = "R$:"+valorComFalemais; 
        
    }

  
    
}
// Associa function listener ao evento click do botao
// botao.addEventListener("click",onButtonClick);

function ddd11PorMinPLUS(taxaMin, a) 
{
//var taxaMin = 0.9;
var dezporcentovalor=(taxaMin*(10/100));
var valorPorMinPLUS =(a *dezporcentovalor).toFixed(2);
return valorPorMinPLUS;
}
function ddd16PorMinPLUS(taxaMin, a) 
{
//var taxaMin = 2.9;
var dezporcentovalor=(taxaMin*(10/100));
var valorPorMinPLUS =(a *dezporcentovalor).toFixed(2);
return valorPorMinPLUS;
}
function ddd17PorMinPLUS(taxaMin, a) 
{
//var taxaMin = 2.7;
var dezporcentovalor=(taxaMin*(10/100));
var valorPorMinPLUS =(a *dezporcentovalor).toFixed(2);
return valorPorMinPLUS;
}
function ddd18PorMinPLUS(taxaMin, a) 
{
//var taxaMin = 1.9;
var dezporcentovalor=(taxaMin*(10/100));
var valorPorMinPLUS =(a *dezporcentovalor).toFixed(2);
return valorPorMinPLUS;
}

