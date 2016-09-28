spa.controller('StoreCtrl', ["$scope", "productService", 'cartService', 'products', 'categories', function($scope, productService, cartService, products, categories){

  $scope.products = products;
  $scope.categories = categories;

  $scope.cart = cartService.listAll();
  $scope.cartSize = cartService.getCartSize();

}]);
