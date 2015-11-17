myApp.controller('address', ['$scope', '$http', function($scope, $http){
    $scope.user = {};
    $scope.userArray=[];


    //POST
    $scope.clickButton = function(kittyFooFoo){
        $http.post('/people', kittyFooFoo).then(function(response){
            $scope.getUser();
        });
        $scope.user = {};
    };
    //
    // GET
    $scope.getUser = function (){

        $http.get('/people').then(function(response){
        console.log("This is from the GET", response.data);
            $scope.userArray = response.data;
        });
    };
    $scope.getUser();
}]);
