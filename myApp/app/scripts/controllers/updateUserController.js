'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('updateUserController', function ($scope,$http,$state,$stateParams,updateUserService,userDetailsService) {
    $scope.user = {};
    $scope.roles = ["Select your role","Admin", "Agency", "Autheriser","Agency-sub","Viewer"];
    console.log($stateParams);
    var id = $stateParams.id;
    userDetailsService.fetchUsers().then(function(data){
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
    $scope.update = function () {
      $scope.showErrormessage = false;
      $scope.updatedUser = false;
      console.log($scope.user1);
      if(($scope.user.first_name==="")||($scope.user.first_name === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter first name";
      }
      else if (($scope.user.second_name==="")||($scope.user.second_name === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter last name";
      }
      else if (($scope.role===$scope.roles[0])||($scope.role === undefined)){
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
      else{
        $scope.user.role = $scope.role;
        $scope.user.image_path = "asaqawsq";
        updateUserService.updateUser($scope.user)
        .then(function(data){
                    console.log(data);
                    status = data.status;
                    if(status=="200"){
                        $scope.updatedUser = true;
                    }
                },
              function(error){
                console.log(error);
                status = error.status;
                if(status=="409"){
                  $scope.showErrormessage = true;
                  $scope.errorMessage = "User already exists!";
                  $scope.updatedUser = false;
                }
              });
     }
    }
  });
