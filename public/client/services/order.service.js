(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.factory('OrderService', OrderService);
    
    function OrderService($http, $q) {
        
        var service = {
            createOrder: createOrder,
            findAllOrders: findAllOrders,
            findAllOrdersByCustomer: findAllOrdersByCustomer,
            findAllOrdersByDriver: findAllOrdersByDriver,
            findOrder: findOrder,
            updateOrder: updateOrder,
            deleteOrder: deleteOrder
        };
        
        function createOrder(order) {
            var deferred = $q.defer();
            function onSuccess(order) {
                deferred.resolve(order);
            }
            $http.post('/api/project/order', order).then(onSuccess);
            return deferred.promise;
        }
        
        function findAllOrders() {
            var deferred = $q.defer();
            function onSuccess(orders) {
                deferred.resolve(orders);
            }
            $http.get('/api/project/order').then(onSuccess);
            return deferred.promise;
        }
        
        function findAllOrdersByCustomer(customerID) {
            var deferred = $q.defer();
            function onSuccess(orders) {
                deferred.resolve(orders);
            }
            $http.get('/api/project/customer/' + customerID + '/order').then(onSuccess);
            return deferred.promise;
        }
        
        function findAllOrdersByDriver(driverID) {
            var deferred = $q.defer();
            function onSuccess(orders) {
                deferred.resolve(orders);
            }
            $http.get('/api/project/driver/' + driverID + '/order').then(onSuccess);
            return deferred.promise;
        }
        
        function findOrder(orderID) {
            var deferred = $q.defer();
            function onSuccess(order) {
                deferred.resolve(order);
            }
            $http.get('/api/project/order/' + orderID).then(onSuccess);
            return deferred.promise;
        }
        
        function updateOrder(orderID, order) {
            var deferred = $q.defer();
            function onSuccess(order) {
                deferred.resolve(order);
            }
            $http.put('/api/project/order/' + orderID, order).then(onSuccess);
            return deferred.promise;
        }
        
        function deleteOrder(orderID) {
            var deferred = $q.defer();
            function onSuccess(order) {
                deferred.resolve(order);
            }
            $http.delete('/api/project/order/' + orderID).then(onSuccess);
            return deferred.promise;
        }
        
        return service;
    };
    
})();