(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('OrderController', orderController);
    
    function orderController($location, OrderService, UserService) {
        
        var model = this;
        
        var userID = localStorage.getItem('user');
        
        function updateUser() {
            var userID = localStorage.getItem('user');
            function onSuccess(response) {
                model.user = response.data;
                fetchOrders();
            }
            if (userID) UserService.findUser(userID).then(onSuccess);
            else model.user = null;
        }
        updateUser();
        
        function fetchOrders() {
            function onSuccess(response) {
                model.orders = response.data;
            }
            if (model.user.__t == 'ProjectManagerModel') OrderService.findAllOrders().then(onSuccess);
            if (model.user.__t == 'ProjectCustomerModel') OrderService.findAllOrdersByCustomer(userID).then(onSuccess);
            if (model.user.__t == 'ProjectDriverModel') OrderService.findAllOrders().then(onSuccess);
        }
        
        model.cancelOrder = function(order) {
            OrderService.deleteOrder(order._id).then(fetchOrders);
        };
         
        model.confirmOrder = function(order) {
            order.status = 'Confirmed';
            OrderService.updateOrder(order._id, order).then(fetchOrders);
        };
        
        model.markReady = function(order) {
            order.status = 'Ready to Deliver';
            OrderService.updateOrder(order._id, order).then(fetchOrders);
        };
        
        model.deliverOrder = function(order) {
            order.driverID = userID;
            order.status = 'On Delivery';
            OrderService.updateOrder(order._id, order).then(fetchOrders);
        };
        
        model.cancelDelivery = function(order) {
            order.driverID = null;
            order.status = 'Ready to Deliver';
            OrderService.updateOrder(order._id, order).then(fetchOrders);
        };
        
        model.completeDelivery = function(order) {
            order.status = 'Delivered';
            order.timeDelivered = Date.now();
            OrderService.updateOrder(order._id, order).then(fetchOrders);
        };
        
        model.leaveReview = function(order) {
            OrderService.updateOrder(order._id, order).then(fetchOrders);
        };
        
        model.trackDelivery = function(order) {
            $location.path('/order/' + order._id + '/track');
        };
    }
    
})();