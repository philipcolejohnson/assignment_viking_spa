spa.directive('cartItem', ['cartService', 'productService', function(cartService, productService){

  return {
    templateUrl: '/directives/cart_item_template.html',
    restrict: "E",
    scope: {
      item: '=',
    },
    link: function(scope) {

      scope.products = productService.getProducts()

      scope.addItem = function(object) {
        cartService.addItem(object);
      };

    }
  };

}]);
