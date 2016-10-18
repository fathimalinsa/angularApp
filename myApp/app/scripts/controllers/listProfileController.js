'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('listProfileController', function ($scope,$rootScope,$http,$state,$stateParams,listProfileService) {
    listProfileService.fetchUsers().then(function(data){
      $scope.users = data.data;
      console.log($scope.users);
    });
    $scope.approve = function (id){
      listProfileService.approve(id).then(function(data){
        listProfileService.fetchUsers().then(function(data){
          $scope.users = data.data;
          console.log($scope.users);
        });
      });
    }
    $scope.viewProfile = function (id) {
      $state.go("viewProfile",{id:id});
    }
    console.log($rootScope.isLoggedIn,$rootScope.loggedInUserName,$rootScope.loggedInRole);
  });
