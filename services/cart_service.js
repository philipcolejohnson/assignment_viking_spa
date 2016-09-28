spa.factory("cartService", [function(){

  var _cart = {};
  var _cartSize = { size: 0 };

  var cartService = {};

  cartService.listAll = function() {
    return _cart;
  };

  cartService.updateCartSize = function() {
    var count = 0;
    for (var item in _cart) {
      if (_cart[item].quantity === "0") {
        removeItem(item);
      } else {
        count += Number(_cart[item].quantity);
      }
    }

    _cartSize.size = count;
  };

  cartService.addItem = function(object, quantity) {
    if (_cart[object.id]) {
      _cart[object.id].quantity = quantity || _cart[object.id].quantity + 1;
    } else {
      _cart[object.id] = {
        id: object.id,
        quantity: quantity || 1
      };
    }
    cartService.updateCartSize();

    return _cart[object.id];
  };

  cartService.removeItem = function(object) {
    delete _cart[object.id];
    cartService.updateCartSize();
  };


  cartService.getCartSize = function() {
    return _cartSize;
  };


  return cartService;

}]);