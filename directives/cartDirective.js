spa.directive('cartItem', ['cartService', 'productService', function(cartService, productService){

  return {
    templateUrl: '/directives/cart_item_template.html',
    restrict: "E",
    scope: {
      item: '=',
      id: "="
    },
    link: function(scope) {

      scope.quantity = scope.item.quantity;
      scope.products = productService.getProducts();

      scope.addItem = function() {
        cartService.addItem(scope.item, scope.quantity);
      };

    }
  };

}]);
