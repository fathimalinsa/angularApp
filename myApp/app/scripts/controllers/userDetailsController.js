'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('userDetailsController', function ($scope,$rootScope,$http,$state,$stateParams,userDetailsService) {
    userDetailsService.fetchUsers().then(function(data){
      $scope.users = data.data;
      console.log($scope.users);
    });
    $scope.addUser = function (){
      $state.go("adduser");
    }
    $scope.updateUser = function(id) {
      $state.go("updateUser",{ id: id });
    }
    $scope.viewUser = function (id) {
      $state.go("viewUser",{id:id});
    }
    $scope.deleteUser = function(userToDelete) {
      userDetailsService.deleteUser(userToDelete).then(function(data){
        console.log("deleted");
      });
    }
    console.log($rootScope.isLoggedIn,$rootScope.loggedInUserName,$rootScope.loggedInRole);
  });
