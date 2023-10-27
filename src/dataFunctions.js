// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const filterData = (data, filterBy, value) => {
  
  return data.filter((element) => element[filterBy] === value);
};

export const sortData = (data, sortBy, sortOrder) => {
  const sortedData = data;

  const asc = sortedData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    } else if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    // }else if (a[sortBy] <= b[sortBy]){
    //   return 0
    // }
  });

  if (sortOrder === "desc") {
    asc.reverse();
  }

  return sortedData;
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

  for (const key in numbersOfChannels) {
    numbersOfChannels[key] = Number(numbersOfChannels[key]);
  }

  return numbersOfChannels;
};
