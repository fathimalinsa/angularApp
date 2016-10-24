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
      $scope.searchResult = false;
      // angular.forEach($scope.users, function(user) {
      for(var i=0;i<$scope.users.length;i++){
        $scope.users[i].search = false;
        if($scope.search!="") {
          if(( $scope.users[i].user_name.indexOf($scope.search) >= 0 )||( $scope.users[i].first_name.indexOf($scope.search) >= 0 )||( $scope.users[i].second_name.indexOf($scope.search) >= 0 )||( $scope.users[i].mobile_number.indexOf($scope.search) >= 0 )
          ||( $scope.users[i].voters_id.indexOf($scope.search) >= 0 )||($scope.users[i].sponser_number.indexOf($scope.search) >= 0 )||($scope.users[i].sponsers_name.indexOf($scope.search) >= 0 )||( $scope.users[i].blood_group.indexOf($scope.search) >= 0 )
          ||( $scope.users[i].height.indexOf($scope.search) >= 0 )||( $scope.users[i].weight.indexOf($scope.search) >= 0 )||( $scope.users[i].addr_line1.indexOf($scope.search) >= 0 )
          ||( $scope.users[i].addr_line2.indexOf($scope.search) >= 0 )||( $scope.users[i].current_location.indexOf($scope.search) >= 0 )) {
            $scope.users[i].search = true;
            $scope.searchResult = true;
          }
          else {
            $scope.users[i].search = false;
          }
        }
      };
    }
    console.log($rootScope.isLoggedIn,$rootScope.loggedInUserName,$rootScope.loggedInRole);
  });
