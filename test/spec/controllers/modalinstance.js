'use strict';

describe('Controller: ModalInstanceCtrl', function () {

  // load the controller's module
  beforeEach(module('testAngularApp'));

  var ModalInstanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalInstanceCtrl = $controller('ModalInstanceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    console.log(scope.awesomeThings);
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
