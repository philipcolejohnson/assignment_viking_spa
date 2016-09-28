spa.controller('CartCtrl', ["$scope", 'cartService', function($scope, cartService){

  $scope.cart = cartService.listAll();

}]);
