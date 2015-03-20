'use strict';

describe('Controller: TvshowsCtrl', function () {

  // load the controller's module
  beforeEach(module('testAngularApp', 'mockTvShows'));

  var TvshowsCtrl,
      scope,
      httpBackend,
      defaultJSON;    

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _defaultJSON_) {

    scope = $rootScope.$new();
    httpBackend = $httpBackend;    
    defaultJSON = _defaultJSON_;

    TvshowsCtrl = $controller('TvshowsCtrl', {
      $scope: scope
    });

  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should return data length equal 5', function () {
    httpBackend.when('GET', '/tvshows').respond(defaultJSON);  
    expect(defaultJSON.data.length).toBe(5);
  });

  it('should have title, year, poster, summary and genre every show', function() {
    httpBackend.when('GET', '/tvshows').respond(defaultJSON);
    expect(defaultJSON.data[0].title).toEqual(jasmine.any(String));
    expect(defaultJSON.data[0].year).toEqual(jasmine.any(Number));
    expect(defaultJSON.data[0].poster).toMatch('http://');
    expect(defaultJSON.data[0].summary).toEqual(jasmine.any(String));
    expect(defaultJSON.data[0].genre).toEqual(jasmine.any(String));
  });

});
