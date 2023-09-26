var app = angular.module('myApp', []);
app.controller('userCtrl', function ($scope, $http) {
  $http.get("https://api.github.com/users")
  .then(function (response) {
    $scope.allPagedUsers = response.data;
    $scope.itemsPerPage = 6;
    $scope.currentPage = 1;
    $scope.totalPages = Math.ceil($scope.allPagedUsers.length / $scope.itemsPerPage);
    $scope.setPage = function (page) {
      if (page >= 1 && page <= $scope.totalPages) {
        $scope.currentPage = page;
        $scope.paginate();
      }
    };
    $scope.prevPage = function () {
      if ($scope.currentPage > 1) {
        $scope.currentPage--;
        $scope.paginate();
      }
    };
    $scope.nextPage = function () {
      if ($scope.currentPage < $scope.totalPages) {
        $scope.currentPage++;
        $scope.paginate();
      }
    };
    $scope.paginate = function () {
      var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
      var endIndex = startIndex + $scope.itemsPerPage;
      $scope.pagedUsers = $scope.allPagedUsers.slice(startIndex, endIndex);
    };
    $scope.pages = [];
    for (var i = 1; i <= $scope.totalPages; i++) {
      $scope.pages.push(i);
    }
    $scope.paginate();
  });

  
$scope.getUserDetails = function (userUrl,followers) {
  // Navigate to the new page and pass the user's URL as a query parameter
  window.location.href = 'main.html?userUrl?followers=' + userUrl + followers;
};
});

