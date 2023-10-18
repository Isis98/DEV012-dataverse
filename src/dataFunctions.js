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

export const sortData = (data, sortBy, sortOrder) => {
  //
  const sortedData = data;

  sortedData.sort((a, b) => {});
};

export const computeStats = (data) => {
  const arrayOfChannels = data.map((item) => item.channel);

  const numbersOfChannels = arrayOfChannels.reduce((accum, channel) => {
    if (accum[channel]) {
      accum[channel]++;
    } else {
      accum[channel] = 1;
    }

    return accum;
  }, {});



  return numbersOfChannels;
};
