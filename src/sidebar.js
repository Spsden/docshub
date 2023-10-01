const showSideBar = () => {
  const template = HtmlService.createTemplateFromFile('index');
  const html = template.evaluate().setTitle('SeeAsWe');
  SpreadsheetApp.getUi().showSidebar(html);
};
export default showSideBar;
