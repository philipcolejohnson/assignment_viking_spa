spa.factory("cartService", ['productService', function(productService){

  var _cart = {};
  var _cartSize = { size: 0 };
  var _total = { total: 0 };
  var _products = productService.getProducts();

  var cartService = {};

  cartService.listAll = function() {
    return _cart;
  };

  cartService.updateCart = function() {
    var count = 0;
    var total = 0;

    for (var item in _cart) {
      if (_cart[item].quantity === "0") {
        delete _cart[item];
      } else {
        count += Number(_cart[item].quantity);
        total += Number(_cart[item].quantity) * Number(_products[item].price);
      }
    }

    _total.total = total;
    _cartSize.size = count;
  };

  cartService.getTotal = function() {
    return _total;
  };

  cartService.addItem = function(object, quantity) {
    if (_cart[object.id]) {
      if (quantity === 0) {
        cartService.removeItem(object);
      } else {
        _cart[object.id].quantity = quantity || _cart[object.id].quantity + 1;
      }
    } else {
      _cart[object.id] = {
        id: object.id,
        quantity: quantity || 1
      };
    }
    cartService.updateCart();

    return _cart[object.id];
  };

  cartService.removeItem = function(object) {
    delete _cart[object.id];
    cartService.updateCart();
  };


  cartService.getCartSize = function() {
    return _cartSize;
  };


  return cartService;

}]);