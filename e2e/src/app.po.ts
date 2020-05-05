import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  irTipoCambio() {
    return browser.get('/tipocambio') as Promise<unknown>;
  }

  obtenerValorCambioSimple() {
    return element(by.id('idSimple')).getText() as Promise<string>;
  }

}
