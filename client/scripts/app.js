//console.log("I'm working");
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html"
        }).
        when('/user_address', {
            templateUrl: "assets/views/routes/user_address.html",
            controller: "address"
        }).
        when('/user_orders', {
            templateUrl: "assets/views/routes/user_orders.html"
        }).
        otherwise({
            redirectTo:'home'
        })
}]);

