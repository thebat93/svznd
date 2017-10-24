import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

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

  it('click on layer and check if it dissapeared from map and it class is "clicked"', () => {
    page.getLayerSpan('Здания').click();
    expect(page.getLayerClass('Здания')).toEqual('layer clicked');
    expect(page.countLayersOnMap()).toEqual(3);
  });
});
