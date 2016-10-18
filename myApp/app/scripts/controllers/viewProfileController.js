'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('viewProfileController', function ($scope,$http,$state,$stateParams,listProfileService) {
    var id = $stateParams.id;
    listProfileService.fetchUsers().then(function(data){
      var users = data.data;
      console.log(users);
      for (var key in users){
        if(users[key].id == id){
          $scope.user = users[key];
          break;
        }
      }
      console.log($scope.user);
    });
  });
