import { browser, by, element } from 'protractor';

export class AngularMaterial1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
