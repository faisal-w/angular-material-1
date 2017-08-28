import { AngularMaterial1Page } from './app.po';

describe('angular-material1 App', () => {
  let page: AngularMaterial1Page;

  beforeEach(() => {
    page = new AngularMaterial1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
