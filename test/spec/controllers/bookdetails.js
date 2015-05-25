'use strict';

describe('Controller: BookdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('cbooksApp'));

  var BookdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookdetailsCtrl = $controller('BookdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
