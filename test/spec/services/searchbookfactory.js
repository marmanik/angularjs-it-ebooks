'use strict';

describe('Service: searchBookFactory', function () {

  // load the service's module
  beforeEach(module('cbooksApp'));

  // instantiate service
  var searchBookFactory;
  beforeEach(inject(function (_searchBookFactory_) {
    searchBookFactory = _searchBookFactory_;
  }));

  it('should do something', function () {
    expect(!!searchBookFactory).toBe(true);
  });

});
