import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Pruebas funcionales del proyecto', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('practica34 app is running!');
  // });

  it('deberia mostrar el valor de cambio en la pantalla con un valor cercano a 7', () => {
    page.irTipoCambio();
    expect(page.obtenerValorCambioSimple()).toBeCloseTo(7.70435);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
