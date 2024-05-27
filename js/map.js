let select=document.querySelector("select");
let cambio;

const CAMBIOS=[
    {moneda:"Dólares USA",elCambio:1.06},
    {moneda:"Libras esterlinas",elCambio:0.87},
    {moneda:"Pesos argentinos",elCambio:370.22},
    {moneda:"Pesos colombianos",elCambio:4510.51},
    {moneda:"Pesos mexicanos",elCambio:19.33},
]
CAMBIOS.map(valor=>select.insertAdjacentHTML("beforeend", `<option value='${valor.elCambio}'>${valor.moneda}</option>`))
modificarCambio();
select.addEventListener("change",modificarCambio)

function modificarCambio(){
  cambio=select.value;
  const INDICE=select.selectedIndex;
  const MONEDA=select[INDICE].text.toLowerCase();
  document.querySelector("#cambio").innerHTML=`1€ es ${cambio} ${MONEDA}`;

}