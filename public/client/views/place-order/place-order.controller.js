(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('PlaceOrderController', placeOrderController);
    
    function placeOrderController($location, ItemService, OrderService) {
        
        var model = this;
        
        function onSuccess(response) {
            model.items = response.data;
        }
        ItemService.findAllItems().then(onSuccess);
        
        model.calculateSubtotal = function (items) {
            var i, subtotal = 0, quantity, price;
            for (i in items) {
                quantity = Math.max(0, items[i].quantity || 0);
                price = items[i].price;
                subtotal += quantity * price;
            }
            model.subtotal = subtotal;
        }
        
        model.placeOrder = function (items) {
            function onSuccess(order) {
                $location.path('/order');
            }
            var order = {
                items: [],
                status: 'Pending',
                customerID: localStorage.getItem('user'),
                timePlaced: Date.now(),
                subtotal: model.subtotal
            }
            for (var i in items) {
                var item = items[i];
                if (item.quantity > 0) {
                    order.items.push({
                        itemID: item._id,
                        quantity: item.quantity,
                        name: item.name,
                        price: item.price
                    });
                }
            }
            console.log(order);
            OrderService.createOrder(order).then(onSuccess);
        }
    }
    
})();