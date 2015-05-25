'use strict';

/**
 * @ngdoc function
 * @name cbooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cbooksApp
 */
angular.module('cbooksApp')
  .controller('MainCtrl', function ($scope, $routeParams, $log, searchBookFactory, appSettings) {

    var query = $routeParams.query;
    $scope.books = [];
    $scope.hasBooks = false;
    $scope.hasPages = false;
    $scope.numPages = 0;
    $scope.numPerPage = 10;
    $scope.maxSize = 7;
    $scope.appSettings = appSettings;

    // Function to search by query can be use for other views
    function incomingQuery(query) {
      searchBookFactory.getBooksByQuery(query)
        .success(function (books) {
          $scope.books = books;
          $scope.actualQuery = query;
          $scope.hasBooks = true;
          $scope.currentPage = 1;
          if (books.Total > 10) {
            $scope.hasPages = true; // Check if there more pages
            $scope.currentPage = 1; // Set current page to 1
            $scope.numPages = numPages(books);
          }else{
            $scope.hasPages = false;
          }
        })
        .error(function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
          $scope.hasBooks = false;
        });
    }

    // Check if there is url parameter
    if(query != null && query != ""){
      incomingQuery(query);
    }

    // Search only with query
    $scope.searchByQuery = function (query) {
      incomingQuery(query);
    };
    // Search with query and pages to move to other pages
    $scope.searchByQueryPage = function (query, page) {
      searchBookFactory.getBooksByQueryPage(query, page)
        .success(function (books) {
          $scope.books = books;
          $scope.hasBooks = true;
          $scope.currentPage = page; // assign the current page that we searched
        })
        .error(function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
          $scope.hasBooks = false;
        });
    };

    // Check the number of pages according
    function numPages(books) {
      return Math.ceil(books.Total / $scope.numPerPage);
    }

    /*         $scope.numPages = function () {
     return Math.ceil($scope.books.Total / $scope.numPerPage);
     };*/
  });
