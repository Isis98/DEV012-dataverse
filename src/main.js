import { computeStats, filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { createChannelStatistics } from "./view.js";
import { sortData } from "./dataFunctions.js";

import data from "./data/dataset.js";
console.log("🚀 ~ file: main.js:7 ~ data:", data)

// const dataClone = [...data];
const renderInView = (element, id) => {
  const rootElement = document.getElementById(id);
  rootElement.innerHTML = "";
  rootElement.appendChild(element);
};

const dataBaseToShowInHtml = renderItems(data);
renderInView(dataBaseToShowInHtml, "root");

const statistics = computeStats(data);
const channelStatistics = createChannelStatistics(statistics);
renderInView(channelStatistics, "statistics");

//Variable que almacena los filtros seleccionados y crean un objeto a la vez.

const channel = document.querySelector("select[name='channel']");
const targetAudience = document.querySelector("select[name='targetAudience']");
const status = document.querySelector("select[name='status']");

const originalData = [...data];
let filteredData = [...data];

function applyFilters() {
  // Create a copy of the original data to apply filters
  filteredData = [...originalData];

  // const selectedChannel = channel.value;
  const selectedPublic = targetAudience.value;
  const selectedTransmission = status.value;

  if (channel.value !== "Todos") {
    filteredData = filterData(filteredData, "channel", channel.value);
  }

  if (selectedPublic !== "Todos") {
    filteredData = filterData(filteredData, "targetAudience", selectedPublic);
  }

  if (selectedTransmission !== "Todos") {
    filteredData = filterData(filteredData, "status", selectedTransmission);
  }

  // Display the filtered data in the HTML.
  const itemsFiltered = renderItems(filteredData);
  renderInView(itemsFiltered, "root");
}

const sort = document.querySelector("select[data-testid='select-sort']");
sort.addEventListener("change", (event) => {
  const selectedSort = event.target.value;
  if (selectedSort !== "Seleccionar") {
    const sortedData = sortData(filteredData, "name", selectedSort);
    // {"ant","bolivar"}
    const itemsFiltered = renderItems(sortedData);
    renderInView(itemsFiltered, "root");
  }
});

const btnToggle = document.querySelector(".toggle-btn");

btnToggle.addEventListener("click", function () {
  // {}
  document.getElementById("sideBar").classList.toggle("active");
});

//Button
const buttonReset = document.querySelector(
  "button[data-testid='button-clear']"
);

buttonReset.addEventListener("click", resetFiltersAndRenderItems);

function resetFiltersAndRenderItems() {
  
  channel.selectedIndex = 0;
  targetAudience.selectedIndex = 0;
  status.selectedIndex = 0;
  sort.selectedIndex = 0;
  filteredData = data;

  const itemsFiltered = renderItems(data);
  renderInView(itemsFiltered, "root");
}

channel.addEventListener("change", applyFilters);
targetAudience.addEventListener("change", applyFilters);
status.addEventListener("change", applyFilters);

// const originalData = [...data];
// let filteredData = [...data];

// // const alertBox = (filteredData) => {
// //   if(filteredData.length === 0){
// //     alert(" No se encuentra ningun resultado ");
// //     // resetFiltersAndRenderItems();
// //   }
// // }

// channel.addEventListener("change", selectChannel);
// targetAudience.addEventListener("change", selectPublic);
// status.addEventListener("change", selectTransmission);

// function applyFilters() {
//   // Display the filtered data in the HTML.
//   const itemsFiltered = renderItems(filteredData);
//   renderInView(itemsFiltered, 'root');
// }

// function selectChannel() {
//   const selectedChannel = channel.value;
//   // Usar if (Todos)
//   if( selectedChannel === "Todos" ){

//     filteredData = originalData;

//   }else{

//     filteredData = filterData(originalData, "channel", selectedChannel);

//   }
//   return applyFilters()
// }

// function selectPublic() {
//   const selectedPublic = targetAudience.value;

//   if( selectedPublic==="Todos" ){

//     filteredData = originalData;

//   }else{

//     filteredData = filterData(originalData, "targetAudience", selectedPublic);

//   }
//   return applyFilters()
// }

// function selectTransmission() {
//   const selectedTransmission = status.value;

//   if( selectedTransmission=== "Todos" ){

//     filteredData = originalData;

//   }else{

//     filteredData = filterData(originalData, "status", selectedTransmission);

//   }
//   return applyFilters()
// }

// Data estadística de canales
// const statisticChannel = data
//   .map((item) => item.channel)
//   .reduce((obj, channel) => {
//     if (obj[channel]) {
//       obj[channel] = obj[channel] + 1;
//     } else {
//       obj[channel] = 1;
//     }
//     return obj;
//   }, {});
// console.log(statisticChannel);

// // Data estadistica de público dirigido
// const statistictargetAudience = data
//   .map((item) => item.targetAudience)
//   .reduce((obj, targetAudience) => {
//     if (obj[targetAudience]) {
//       obj[targetAudience] = obj[targetAudience] + 1;
//     } else {
//       obj[targetAudience] = 1;
//     }
//     return obj;
//   }, {});

// const ver = document.getElementById("vista")
// ver.innerHTML = "Data estadística: <br>Canales de televisión: " + JSON.stringify(statisticChannel) +
// "<br>Público objetivo: <br>" + JSON.stringify(statistictargetAudience);

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
