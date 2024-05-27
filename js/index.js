let select=document.querySelector("select");

select.insertAdjacentHTML("beforeend", "<option value='1.06'>Dólares USA</option>");
select.insertAdjacentHTML(
  "beforeend",
  "<option value='0.87'>Libras esterlinas</option>"
);
select.insertAdjacentHTML(
  "beforeend",
  "<option value='370.22'>Pesos argentinos</option>"
);
select.insertAdjacentHTML(
  "beforeend",
  "<option value='4510.51'>Pesos colombianos</option>"
);
select.insertAdjacentHTML(
  "beforeend",
  "<option value='19.33'>Pesos mexicanos</option>"
);

/*
Dólares USA - 1.06
Libras esterlinas - 0.87
Pesos argentinos - 370.22
Pesos colombianos - 4510.51
Pesos mexicanos - 19.33
*/
/*
const CAMBIOS=[
    {moneda:"Dólares USA",elCambio:1.06},
    {moneda:"Libras esterlinas",elCambio:0.87},
    {moneda:"Pesos argentinos",elCambio:370.22},
    {moneda:"Pesos colombianos",elCambio:4510.51},
    {moneda:"Pesos mexicanos",elCambio:19.33},
]
*/