import { computeStats, filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { channelStatistics } from "./view.js";
import { sortData } from "./dataFunctions.js";

import data from "./data/dataset.js";

// const dataClone = [...data];
const renderInView = (element, id) => {
  const rootElement = document.getElementById(id);
  rootElement.innerHTML = ''
  rootElement.appendChild(element);
};

const dataBaseToShowInHtml = renderItems(data);
renderInView(dataBaseToShowInHtml, 'root');

const statistics = computeStats(data);
const cartoonStatistics = channelStatistics(statistics);
renderInView(cartoonStatistics, 'statistics');


//Variable que almacena los filtros seleccionados y crean un objeto a la vez.

const channel = document.querySelector("select[name='channel']");
const targetAudience = document.querySelector("select[name='targetAudience']");
const status = document.querySelector("select[name='status']");
const sort = document.querySelector("select[data-testid='select-sort']");

let filteredData = data;


channel.addEventListener("change", selectChannel);
targetAudience.addEventListener("change", selectPublic);
status.addEventListener("change", selectTransmission);
sort.addEventListener("change", selectSort );


function selectChannel() {
  const selectedChannel = channel.value;

  filteredData = filterData(filteredData, "channel", selectedChannel);

  const itemsFiltered = renderItems(filteredData);
  renderInView(itemsFiltered, 'root')
}

function selectPublic() {
  const selectedPublic = targetAudience.value;

  filteredData = filterData(filteredData, "targetAudience", selectedPublic);

  const itemsFiltered = renderItems(filteredData);
  renderInView(itemsFiltered, 'root')
}

function selectTransmission() {
  const selectedTransmission = status.value;

  filteredData = filterData(filteredData, "status", selectedTransmission);

  const itemsFiltered = renderItems(filteredData);
  renderInView(itemsFiltered, 'root')
}

function selectSort() {
  
  const selectedSort = sort.value;

  const sortedData = sortData(filteredData, 'name', selectedSort);
  console.log("🚀 ~ file: main.js:71 ~ selectSort ~ sortedData:", sortedData)

  const itemsFiltered = renderItems(sortedData);
  renderInView(itemsFiltered, 'root')
  

}


const btnToggle = document.querySelector(".toggle-btn");

btnToggle.addEventListener("click", function () {
  document.getElementById("sideBar").classList.toggle("active");
});

const buttonReset = document.querySelector(
  "button[data-testid='button-clear']"
);

buttonReset.addEventListener("click", resetFilters);

function resetFilters() {
  buttonReset.selectedIndex = 0;
  const itemsFiltered = renderItems(data);
  renderInView(itemsFiltered, 'root')
  filteredData = data;
  channel.selectedIndex = 0;
  targetAudience.selectedIndex = 0;
  status.selectedIndex = 0;
  sort.selectedIndex = 0;
}









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
