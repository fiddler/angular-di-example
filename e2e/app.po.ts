export class AngularDiExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-di-example-app p')).getText();
  }
}
