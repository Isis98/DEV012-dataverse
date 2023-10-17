// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const filteredData = [];

  data.forEach((element) => {
    if (element[filterBy] === value) {
      filteredData.push(element);
    } 
  });

    return filteredData;
  

};

export const sortData = (data, sortBy,sortOrder) => {

  const sortedData = [...data];
  
  
};
//filteredData
