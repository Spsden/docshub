import onLaunch from './onLaunch';
import showSideBar from './sidebar';

function myFunction() {
  Logger.log('HELLO FROM HERE');
}

global.onLaunch = onLaunch;
global.showSideBar = showSideBar;

global.myFunction = myFunction;
