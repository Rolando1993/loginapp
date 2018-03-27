import { LoginAPPPage } from './app.po';

describe('login-app App', () => {
  let page: LoginAPPPage;

  beforeEach(() => {
    page = new LoginAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
