'use strict';

describe('Service: TvFactory', function () {

  // load the service's module
  beforeEach(module('testAngularApp'));

  // instantiate service
  var TvFactory;

  beforeEach(inject(function (_TvFactory_) {
    TvFactory = _TvFactory_;
  }));

  it('should have an shows functions', function () {    
    expect(angular.isFunction(TvFactory.getShows)).toBe(true);
    expect(angular.isFunction(TvFactory.addShows)).toBe(true);
    expect(angular.isFunction(TvFactory.deleteShow)).toBe(true);
  });

});
