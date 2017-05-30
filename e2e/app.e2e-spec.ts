import { NgX60Page } from './app.po';

describe('ng-x60 App', () => {
  let page: NgX60Page;

  beforeEach(() => {
    page = new NgX60Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
