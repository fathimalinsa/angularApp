myApp.config(function($stateProvider) {
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
});
