'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('updateUserController', function ($rootScope,$scope,$http,$state,$stateParams,updateUserService,userDetailsService) {
    $scope.user = {};
    if(($rootScope.loggedInRole == "Master")||($rootScope.loggedInRole == "master")){
      $scope.roles = ["Select your role","Master","Admin", "Agency", "Autheriser","Viewer"];
    }
    if(($rootScope.loggedInRole == "Admin")||($rootScope.loggedInRole == "admin")){
      $scope.roles = ["Select your role", "Agency", "Autheriser","Viewer"];
    }
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
      else{
        $scope.user.role = $scope.role;
        $scope.user.image_path = "asaqawsq";
        $scope.sendData = {};
        $scope.sendData.user_name = $scope.user.user_name;
        $scope.sendData.first_name = $scope.user.first_name;
        $scope.sendData.second_name = $scope.user.second_name;
        $scope.sendData.image_path = $scope.user.image_path;
        $scope.sendData.role = $scope.user.role;
        updateUserService.updateUser($scope.sendData)
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
                  $scope.errorMessage = "Update failed.Try aagain later.";
                  $scope.updatedUser = false;
                }
              });
     }
    }
  });
