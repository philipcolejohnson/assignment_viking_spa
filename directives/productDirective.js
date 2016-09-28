spa.directive('product', ['cartService', function(cartService){

  return {
    templateUrl: '/directives/product_template.html',
    restrict: "E",
    scope: {
      product: '='
    },
    link: function(scope) {
      
      scope.addItem = function(object) {
        cartService.addItem(object);
      };

    }
  };

}]);
