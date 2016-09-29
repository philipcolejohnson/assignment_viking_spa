spa.controller('CheckoutCtrl', ['$scope', 'cartService', 'productService', function($scope, cartService, productService) {

  $scope.total = cartService.getTotal();
  $scope.cart = cartService.listAll();
  $scope.products = productService.getProducts();

  $scope.expYears = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  $scope.expMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  $scope.form = {
    payment: {
      expMonth: "1",
      expYear: "2016"
    }
  };

}]);