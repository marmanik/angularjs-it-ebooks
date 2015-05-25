'use strict';

/**
 * @ngdoc function
 * @name cbooksApp.controller:BookdetailsCtrl
 * @description
 * # BookdetailsCtrl
 * Controller of the cbooksApp
 */
angular.module('cbooksApp')
  .controller('BookDetailsCtrl', function ($scope, $routeParams, $log, searchBookFactory, appSettings) {

    var bookId = $routeParams.bookId;
    $scope.book = null;
    $scope.appSettings = appSettings;

    // Get data for a specific book and the bookId is url-parameter
    function init() {
      searchBookFactory.getBookById(bookId)
        .success(function (book) {
          $scope.book = book;
        })
        .error(function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }
    init();
  });
