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
      controller: 'StoreCtrl'
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
    })
});


spa.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);
