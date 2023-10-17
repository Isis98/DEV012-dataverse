import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { sortData } from "./dataFunctions.js";

import data from "./data/dataset.js";

renderItems(data);

//Variable que almacena los filtros seleccionados y crean un objeto a la vez.

const channel = document.querySelector("select[name='channel']");
const targetAudience = document.querySelector("select[name='targetAudience']");
const status = document.querySelector("select[name='status']");

let filteredData = data;

channel.addEventListener("change", selectChannel);
targetAudience.addEventListener("change", selectPublic);
status.addEventListener("change", selectTransmission);


function selectChannel() {

    const selectedChannel = channel.value;

    filteredData = filterData (filteredData, "channel", selectedChannel );

    renderItems(filteredData)
}


function selectPublic() {

    const selectedPublic = targetAudience.value;

    filteredData = filterData (filteredData, "targetAudience", selectedPublic );

    renderItems(filteredData)
}

function selectTransmission() {

  const selectedTransmission = status.value;

  filteredData = filterData(filteredData, "status", selectedTransmission);

  renderItems(filteredData);

};

const btnToggle = document.querySelector(".toggle-btn");

btnToggle.addEventListener("click", function () {
  document.getElementById("sideBar").classList.toggle("active");
})

const buttonReset = document.querySelector("button[data-testid='button-clear']")

buttonReset.addEventListener("click", resetFilters)

function resetFilters () {

    buttonReset.selectedIndex = 0;
    renderItems(data);
    filteredData = data;
    channel.selectedIndex = 0;
    targetAudience.selectedIndex = 0;
    status.selectedIndex = 0;
}

// Data estadística de canales
const statisticChannel = data
.map(item=> item.channel)
.reduce((obj,channel) => {
  if (obj[channel]) {
  obj[channel] = obj[channel] + 1;
} else {
  obj[channel] = 1;
}
return obj;
}, {});
console.log(statisticChannel);
// Data estadistica de público dirigido
const statistictargetAudience = data
.map(item => item.targetAudience)
.reduce((obj,targetAudience) => {
  if(obj[targetAudience]) {
    obj[targetAudience] = obj[targetAudience] + 1;
  }  else {
    obj[targetAudience] = 1;
  }
  return obj;
}, {});
const ver = document.getElementById("vista")
ver.innerHTML = "Data estadística: <br>Canales de televisión: " + JSON.stringify(statisticChannel) +
"<br>Público objetivo: <br>" + JSON.stringify(statistictargetAudience);




// select.selectedIndex = 0;

// const selection = document.querySelectorAll("select[data-testid='select-filter']");

// selection.addEventListener("change", selectElements);

// function selectElements() {

//       const selectedElements = selection.value;

//       const filteredElements = filterData(data, selection.name , selectedElements);

//       renderItems(filteredElements);

//     };

//Steps: -Almacenar los selectores a filtrar
// const selectorsList = document.querySelectorAll("select[data-testid='select-filter']");
//[select1, select]

// - Almacenar los elementos
{
  /* <select data-testid="select-filter" name="targetAudience" value=''>
<option value="">Todos</option>
<option value="Niños">Niños</option>
<option value="Niños y adolescentes">Niños y adolescentes</option>
</select> */
}

// -Recorrer el listado de los selectores
//  selectorsList.forEach((element) => {
// if(element === value){
// filters.push(element)
// }

//  })

//Filtrar por cada selector(forEach)
//Renderizar los elementos filtrados

// function applyFilters() {
//     const selectedValue = {};
  
//     //almacenar los valores seleccionados de cada filtro en selectedValue
//     selectedValue.channel = channel.value;
//     selectedValue.audience = targetAudience.value;
//     selectedValue.status = status.value;
//     console.log(
//       "🚀 ~ file: main.js:30 ~ applyFilters ~ selectedValue:",selectedValue);
  
    
  
//     filteredData = filterData(filteredData, "channel", channel.value);
//     filteredData = filterData(filteredData, "status", status.value);
//     filteredData = filterData(filteredData, "targetAudience",targetAudience.value);
    
  
//     if (filteredData.length > 0) {
//       renderItems(filteredData);
//     }
//     console.log("🚀 ~ file: main.js:38 ~ applyFilters ~ filteredData:",filteredData);
//   }

// Evento de sideBar
