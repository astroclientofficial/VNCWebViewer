import { VNCWebViewerPage } from './app.po';

describe('vncweb-viewer App', () => {
  let page: VNCWebViewerPage;

  beforeEach(() => {
    page = new VNCWebViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
