spa.controller('NavCtrl', ["$scope", 'cartService', function($scope, cartService){

  $scope.cartSize = cartService.getCartSize();

}]);