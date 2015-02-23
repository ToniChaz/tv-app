// Test to load home page
describe('test angularjs homepage', function() {
  it('compare title', function() {
    browser.get('http://localhost:9000');

    expect(browser.getTitle()).toEqual('Angular Grunt Karma Protractor');
  });
});
