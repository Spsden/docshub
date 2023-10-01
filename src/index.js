import onLaunch from './onLaunch';
import showSideBar from './sidebar';
import processCSV from './csvparser/csvparser';
import logger from './logger';

function displayToastAlert(message) {
  SpreadsheetApp.getActive().toast(message, '⚠️ Alert');
}
function writeDataToSheet(data) {
  const ss = SpreadsheetApp.getActive();
  // eslint-disable-next-line prefer-const
  let sheet = ss.insertSheet();
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  return sheet.getName();
}
function myFunction(file) {
  const contents = Utilities.parseCsv(file);
  const sheetName = writeDataToSheet(contents);
  displayToastAlert(`The CSV file was successfully imported into ${sheetName}.`);
  Logger.log(file);
  return '23';
}

global.onLaunch = onLaunch;
global.showSideBar = showSideBar;
global.processCSV = processCSV;
global.logger = logger;

global.myFunction = myFunction;
