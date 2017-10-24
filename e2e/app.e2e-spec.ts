import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;
  const layersArray: Array<string> = ['Здания', 'Adygeya_mosaic_260_1', 'ООПТ'];
  beforeEach(() => {
    page = new AppPage();
  });

  it('title should be MyApp', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('MyApp');
  });

  it('should add 4 layers from file', () => {
    expect(page.countLayers()).toEqual(4);
    expect(page.countLayersOnMap()).toEqual(4);
  });

  it('should authanticate as admin', () => {
    page.getLoginButton().click();
    page.authenticate('admin', 'test');
    expect(page.checkIfAuth()).toBe(true);
  });

  layersArray.map(layer => {
    it(`click on layer ${layer} and check if it dissapears from map and it class is "clicked"`, () => {
      page.getLayerSpan(layer).click();
      expect(page.getLayerClass(layer)).toEqual('layer clicked');
      expect(page.countLayersOnMap()).toEqual(3);
    });

    it(`click on layer ${layer} and check if it appears on map and changes its class`, () => {
      page.getLayerSpan(layer).click();
      expect(page.getLayerClass(layer)).toEqual('layer');
      expect(page.countLayersOnMap()).toEqual(4);
    });
  });

  it('delete layer and check if it is deleted from map', () => {
    page.getLoginButton().click();
    page.authenticate('admin', 'test');
    expect(page.checkIfAuth()).toBe(true);
  });
});
