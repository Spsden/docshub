const onLaunch = () => {
  SpreadsheetApp.getUi()
    .createMenu('SeeAsWe')
    .addItem('Show sidebar', 'showSideBar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onLaunch;
