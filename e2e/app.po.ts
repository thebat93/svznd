import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getMap() {
    return element(by.tagName('my-map'));
  }

  getAuth() {
    return element(by.tagName('my-auth'));
  }

  getLayersList() {
    return element(by.tagName('layers-list'));
  }

  getNewLayerForm() {
    return element(by.tagName('new-layer'));
  }

  getLoginButton() {
    return element(by.id('showForm'));
  }

  authenticate(login: string, pass: string) {
    element(by.id('login')).sendKeys(login);
    element(by.id('pass')).sendKeys(pass);
    element(by.id('enter')).click();
  }

  checkIfAuth() {
    return element(by.id('exit')).isPresent();
  }

  countLayers() {
    return element.all(by.css('.layers-list li')).count();
  }

  countLayersOnMap() {
    return element.all(by.css('.leaflet-container .leaflet-pane.leaflet-tile-pane .leaflet-layer')).count();
  }

  getLayerSpan(layer: string) {
    return element(by.cssContainingText('.layers-list li .layer', layer));
  }

  getLayerClass(layer: string) {
    const layerSpan = this.getLayerSpan(layer);
    return layerSpan.getAttribute('class');
  }
}