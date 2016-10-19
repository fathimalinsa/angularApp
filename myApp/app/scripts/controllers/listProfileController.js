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
    $scope.addProfile = function(){
      $state.go("addProfile");
    }
    $scope.searchProfile = function() {
      angular.forEach($scope.users, function(user) {
        user.search = false;
        $scope.searchResult = false;
        if($scope.search!="") {
          if(( user.user_name.indexOf($scope.search) >= 0 )||( user.first_name.indexOf($scope.search) >= 0 )||( user.second_name.indexOf($scope.search) >= 0 )) {
            user.search = true;
            $scope.searchResult = true;
          }
        }
      });
    }
    console.log($rootScope.isLoggedIn,$rootScope.loggedInUserName,$rootScope.loggedInRole);
  });
