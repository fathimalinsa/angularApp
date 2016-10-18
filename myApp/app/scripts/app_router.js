myApp.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise("/login");
  $stateProvider.state('home', {
          url: "/about",
          templateUrl: "../views/about.html",
          controller: "AboutCtrl"
        })
        .state('main', {
          url: "/main",
          templateUrl: "../views/main.html",
          controller: "MainCtrl"
        })
        .state('login', {
          url: "/login",
          templateUrl: "../views/login.html",
          controller: "loginController"
        })
        .state('adduser', {
          url: "/adduser",
          templateUrl: "../views/addUser.html",
          controller: "addUserController"
        })
        .state('userDetails', {
          url: "/userDetails",
          templateUrl: "../views/userDetails.html",
          controller: "userDetailsController"
        })
        .state('updateUser', {
          url: "/update:id",
          templateUrl: "../views/updateUser.html",
          controller: "updateUserController"
        })
        .state('viewUser', {
          url: "/user:id",
          templateUrl: "../views/viewUser.html",
          controller: "viewUserController"
        })
        .state('addProfile', {
          url: "/addProfile",
          templateUrl: "../views/addProfile.html",
          controller: "addProfileController"
        })
        .state('listProfile', {
          url: "/profile",
          templateUrl: "../views/listProfile.html",
          controller: "listProfileController"
        })
        .state('viewProfile', {
          url: "/profile:id",
          templateUrl: "../views/viewProfile.html",
          controller: "viewProfileController"
        })
});
