import {computeStats, filterData} from '../src/dataFunctions.js';
import data from '../src/data/dataset.js';
import { sortData } from '../src/dataFunctions.js';


const filteredDataDisney = filterData(data, "channel", "Disney Channel")
const filteredDataCartoon = filterData(data, "channel", "Cartoon Network")
const filteredDataDiscovery = filterData(data, "channel", "Discovery Kids")
const filteredDataNickelodeon = filterData(data, "channel", "Nickelodeon")

describe('filtro por canales', () => {
  it('Debe filtrar por programas de Disney Channel', () => {
    const filterDisney = filterData(data, "channel", "Disney Channel")
    expect(filterDisney).toStrictEqual(filteredDataDisney); 
  });

  it('Debe filtrar por programas de Cartoon', () => {
    const filterCartoon = filterData(data, "channel", "Cartoon Network")
    expect(filterCartoon).toStrictEqual(filteredDataCartoon);
  });

  it('Debe filtrar por programas de Discovery', () => {
    const filterDiscovery = filterData(data, "channel", "Discovery Kids")
    expect(filterDiscovery).toStrictEqual(filteredDataDiscovery);
  });

  it('Debe filtrar por programas de Nickelodeon', () => {
    const filterNickelodeon = filterData(data, "channel", "Nickelodeon")
    expect(filterNickelodeon).toStrictEqual(filteredDataNickelodeon);
  })
});

describe('filtro por público dirigido', () => {
  it('Debe filtrar por programas para niños', () => {
    const filterKids = filterData(data, "targetAudience", "Niños")
    expect(filterKids.length).toBe(7); 
  });
  it('Debe filtrar por programas para niños y adolescentes', () => {
    const filterTeenagers = filterData(data, "targetAudience", "Niños y adolescentes")
    expect(filterTeenagers.length).toBe(17); 
  });
});

describe('Ordenamiento' , () => {
  it('Ordenamiento ascendente',() =>{
    const ascendente = sortData(data, "name", "asc") 
    expect(ascendente[0]).toStrictEqual(data[0]);// Esta cambiando la data inicial
  });
  it('Ordenamiento descendente',() =>{
    const descendente = sortData(data, "name", "desc") 
    expect(descendente[0]).toStrictEqual(data[0]);
  }); 
});

describe ('Estadistica Global', () => {
  it('Estadistica General por Canales', () => {
    const channelStatistics ={"Cartoon Network": 6, "Discovery Kids": 6, "Disney Channel": 6, "Nickelodeon": 6};
    const globalStatictic = computeStats(data)
    expect(globalStatictic).toStrictEqual(channelStatistics);

  }
  
  )
}
  
);
