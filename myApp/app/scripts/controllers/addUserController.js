'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('addUserController', function ($scope,$http,$state,$stateParams,addUserService) {
    $scope.user = {};
    $scope.roles = ["Select your role","Admin", "Agency", "Autheriser","Agency-sub","Viewer"];
    $scope.addUser = function (user) {
      $scope.showErrormessage = false;
      $scope.addedUser = false;
      console.log(user);
      if(($scope.user.firstName==="")||($scope.user.firstName === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter first name";
      }
      else if (($scope.user.lastName==="$scope.roles[0]")||($scope.user.lastName === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter last name";
      }
      else if (($scope.user.role===$scope.roles[0])||($scope.user.role === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter role";
      }
      else if (($scope.user.password==="")||($scope.user.password === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter password";
      }
      else if (($scope.user.confirmPassword==="")||($scope.user.confirmPassword === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Passwords do not match";
      }
      else if ($scope.user.confirmPassword!= $scope.user.password){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Passwords do not match";
      }
      else if (($scope.user.mobile==="")||($scope.user.mobile === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter mobile number";
      }
      else if (($scope.user.email==="")||($scope.user.email === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter email";
      }
      else{
        addUserService.addUser(user).then(function(data){
                      status = data.status;
                      if(status=="200"){
                          $scope.addedUser = true;
                          // $scope.user = {};
                          // $scope.roles = ["Select your role","Admin", "Agency", "Autheriser","Agency-sub","Viewer"];
                      }
                  });
     }
    }
  });
