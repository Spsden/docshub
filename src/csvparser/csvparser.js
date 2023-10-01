// eslint-disable-next-line import/no-extraneous-dependencies
import { parse } from 'csv-parse';

const fs = require('fs');

const inputFile = 'books2.csv'; // Replace with the path to your CSV file

const fileStream = fs.createReadStream(inputFile);

fileStream.pipe(
  parse(
    {
      columns: true, // Treat the first row as headers
      delimiter: ';', // Specify the delimiter (default is ',')
      trim: true, // Trim leading/trailing white spaces from values
    },
    (err, output) => {
      if (err) {
        console.error('Error parsing the CSV:', err);
        return;
      }

      console.log(output); // Parsed CSV data as an array of objects
    }
  )
);

function processCSV(file) {}
