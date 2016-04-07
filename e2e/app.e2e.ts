import { AngularDiExamplePage } from './app.po';

describe('angular-di-example App', function() {
  let page: AngularDiExamplePage;

  beforeEach(() => {
    page = new AngularDiExamplePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-di-example Works!');
  });
});
