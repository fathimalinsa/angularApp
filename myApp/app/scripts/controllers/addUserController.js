'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('addUserController', function ($scope,$rootScope,$http,$state,$stateParams,addUserService) {
    $scope.user = {};
    if(($rootScope.loggedInRole == "Master")||($rootScope.loggedInRole == "master")){
      $scope.roles = ["Select your role","Master","Admin", "Agency", "Autheriser","Viewer"];
    }
    if(($rootScope.loggedInRole == "Admin")||($rootScope.loggedInRole == "admin")){
      $scope.roles = ["Select your role", "Agency", "Autheriser","Viewer"];
    }
    //an array of files selected
    $scope.files = [];

    //listen for the file selected event
    $scope.$on("fileSelected", function (event, args) {
        $scope.$apply(function () {
            //add the file object to the scope's files collection
            $scope.files.push(args.file);
        });
    });
    $scope.addUser = function () {
      $scope.showErrormessage = false;
      $scope.addedUser = false;
      console.log($scope.user1);
      if(($scope.firstName==="")||($scope.firstName === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter first name";
      }
      else if (($scope.lastName==="")||($scope.lastName === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter last name";
      }
      else if (($scope.role===$scope.roles[0])||($scope.role === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter role";
      }
      else if (($scope.password==="")||($scope.password === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter password";
      }
      else if (($scope.confirmPassword==="")||($scope.confirmPassword === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Passwords do not match";
      }
      else if ($scope.confirmPassword!= $scope.password){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Passwords do not match";
      }
      else if (($scope.userName==="")||($scope.userName === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter user name";
      }
      else{
        $scope.user.user_name = $scope.userName;
        $scope.user.first_name = $scope.firstName;
        $scope.user.second_name = $scope.lastName;
        $scope.user.password = $scope.password;
        $scope.user.role = $scope.role;
        $scope.user.image_path = "asaqawsq";
        addUserService.addUser($scope.user)
        .then(function(data){
                    console.log(data);
                    status = data.status;
                    if(status=="200"){
                        $scope.addedUser = true;
                    }
                },
              function(error){
                console.log(error);
                status = error.status;
                if(status=="409"){
                  $scope.showErrormessage = true;
                  $scope.errorMessage = "User already exists!";
                  $scope.addedUser = false;
                }
              });
     }
    }
  });
