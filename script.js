var app= angular.module("myApp",[]);
        app.controller("userCtrl",function($scope,$http){
        $http.get("https://api.github.com/users")
       .then(function(response){
        console.log(response);
        $scope.users=response.data;
    })
  })