'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('addProfileController', function ($scope,$rootScope,$http,$state,$stateParams,addProfileService) {
    $scope.user = {};
    $scope.addProfile = function () {
      $scope.showErrormessage = false;
      $scope.addedUser = false;
      console.log($scope.user1);
      if(($scope.first_name==="")||($scope.first_name === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter first name";
      }
      else if (($scope.second_name==="")||($scope.second_name === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter last name";
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
      else if (($scope.user_name==="")||($scope.user_name === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter user name";
      }
      else if (($scope.addr_line1==="")||($scope.addr_line1 === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter address line 1";
      }
      else if (($scope.addr_line2==="")||($scope.addr_line2 === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter address line 2";
      }
      else if (($scope.city==="")||($scope.city === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter city";
      }
      else if (($scope.state==="")||($scope.state === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter state";
      }
      else if (($scope.pin==="")||($scope.pin === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter pin";
      }
      else if (($scope.pan_number==="")||($scope.pan_number === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter pan number";
      }
      else if (($scope.mobile_number==="")||($scope.mobile_number === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter mobile number";
      }
      else if (($scope.sponsers_name==="")||($scope.sponsers_name === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter sponser's name";
      }
      else if (($scope.sponser_number==="")||($scope.sponser_number === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter adhar number";
      }
      else if (($scope.voters_id==="")||($scope.voters_id === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter voter's id";
      }
      else if (($scope.pan_number==="")||($scope.pan_number === undefined)){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Enter pan number";
      }
      else{
        $scope.user.user_name = $scope.user_name;
        $scope.user.first_name = $scope.first_name;
        $scope.user.second_name = $scope.second_name;
        $scope.user.password = $scope.password;
        $scope.user.addr_line1 = $scope.addr_line1;
        $scope.user.addr_line2= $scope.addr_line2;
        $scope.user.city = $scope.city;
        $scope.user.state = $scope.state;
        $scope.user.pin = $scope.pin;
        $scope.user.pan_number = $scope.pan_number;
        $scope.user.mobile_number = $scope.mobile_number;
        $scope.user.image_path = "asaqawsq";
        $scope.user.voters_id = $scope.voters_id;
        $scope.user.sponsers_name = $scope.sponsers_name;
        $scope.user.sponser_number = $scope.sponser_number;
        $scope.user.verified = " ";
        addProfileService.addProfile($scope.user)
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
                  $scope.errorMessage = "Some error occured.Try again!";
                  $scope.addedUser = false;
                }
              });
     }
    }
  });
