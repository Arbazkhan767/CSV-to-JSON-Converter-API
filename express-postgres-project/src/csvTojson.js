const csvtojson = require('csvtojson');

const csvFilePath = '../data/simple.csv';

(async () => {
  try {
    const jsonArray = await csvtojson().fromFile(csvFilePath);
    console.log(jsonArray);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();
