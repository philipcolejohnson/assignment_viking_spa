var spa = angular.module('spa', ['ui.router']);

spa.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('products', {
      url: '/products',
      abstract: true,
      template: '<div ui-view></div>'
    })

    .state('products.index', {
      url: '',
      templateUrl: '/templates/products.html',
      controller: 'StoreCtrl',
      resolve: {

        products: function(productService) {
          return productService.getProducts();
        },

        categories: function(productService) {
          return productService.getCategories();
        }

      }
    })


    .state('cart', {
      url: '/cart',
      templateUrl: '/templates/cart.html',
      controller: 'CartCtrl'
    })

    .state('products.show', {
      url: '/:product_id',
      templateUrl: '/templates/product.html',
      controller: 'StoreShowCtrl'
    });
});


spa.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

spa.run(['_', '$rootScope', function(_, $rootScope) {
  $rootScope.isEmpty = _.isEmpty;
}]);

spa.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
