'use strict';

describe('Service: Contact', function () {

  // load the service's module
  beforeEach(module('testAngularApp'));

  // instantiate service
  var Contact;
  beforeEach(inject(function (_contact_) {
    Contact = _contact_;
  }));

  it('should do something', function () {
    expect(!!Contact).toBe(true);
  });

});
