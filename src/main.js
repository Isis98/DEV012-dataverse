import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';



channel.addEventListener("change", selectChannel);


console.log(filterData(data, null, null), renderItems(null), data);
