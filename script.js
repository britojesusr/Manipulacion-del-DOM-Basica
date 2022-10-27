const calc1=document.querySelector("#calculo1");
const calc2=document.querySelector("#calculo2");

const btnCalc =document.querySelector("#btnCalcular");

const resul =document.querySelector('#resultado');

btnCalc.addEventListener('click', btnOnClick);


function btnOnClick(){

  const suma = Number(calc1.value) + Number(calc2.value);
  resul.innerText = "Resultado: " + suma; 

}