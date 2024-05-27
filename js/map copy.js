let select=document.querySelector("select");
let cambio;
let tipoCambio;
let donacion=0;

const CAMBIOS=[
    {moneda:"Dólares USA",elCambio:1.06},
    {moneda:"Libras esterlinas",elCambio:0.87},
    {moneda:"Pesos argentinos",elCambio:370.22},
    {moneda:"Pesos colombianos",elCambio:4510.51},
    {moneda:"Pesos mexicanos",elCambio:19.33},
]
CAMBIOS.map(valor=>select.insertAdjacentHTML("beforeend", `<option value='${valor.elCambio}'>${valor.moneda}</option>`))
modificarCambio();
actualizarDonaciones();
limpiarInputs();

// Vamos al input Euros
document.querySelector("#euros").addEventListener("keyup",cambio1);
document.querySelector("#divisa").addEventListener("keyup",cambio2);
select.addEventListener("change",recalcular);

// ULtima parte 5%
document.querySelector("#donar").addEventListener("click",donar);
// document.querySelector("#donacion").addEventListener("keyup",donar);

function donar(){
  donacion+=decimales(donacion(Number(document.querySelector("#euros").value)*0.05));
  actualizarDonaciones();
}

function actualizarDonaciones(){
  document.querySelector("#donacion").value=donacion;
}

function recalcular(){
  modificarCambio();
  (tipoCambio===1)
  ? cambio1()
  : cambio2();

  // if(tipoCambio==1){
  //   cambio1();
  // }else{
  //   cambio2();
  // }
}

function cambio1(){
  tipoCambio=1;
  let escrito=Number(document.querySelector("#euros").value);
  let resultado=decimales(escrito*cambio);
  document.querySelector("#divisa").value=resultado
}
function cambio2(){
  tipoCambio=2;
  let escrito = Number(document.querySelector("#divisa").value);
  let resultado=decimales(escrito/cambio);
  document.querySelector("#euros").value=resultado
}

function decimales(cantidad){
  return Number(cantidad).toFixed(2);
}

function modificarCambio(){
  cambio=select.value;
  const INDICE=select.selectedIndex;
  const MONEDA=select[INDICE].text.toLowerCase();
  document.querySelector("#cambio").innerHTML=`1€ es ${cambio} ${MONEDA}`;
  
}

function limpiarInputs(){
  document.querySelector("#euros").value="";
  document.querySelector("#divisa").value="";
  document.querySelector("#euros").focus();
}