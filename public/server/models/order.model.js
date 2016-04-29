(function() {
    
    module.exports = function(mongoose, db) {
        
        var q = require('q');
    
        var OrderSchema = require('./order.schema.js')(mongoose);
        var OrderModel = mongoose.model('ProjectOrderModel', OrderSchema);

        var API = {
            createOrder: createOrder,
            findAllOrders: findAllOrders,
            findAllOrdersByCustomer: findAllOrdersByCustomer,
            findAllOrdersByDriver: findAllOrdersByDriver,
            findOrder: findOrder,
            updateOrder: updateOrder,
            deleteOrder: deleteOrder
        };
        
        function createOrder(order) {
            var deferred = q.defer();
            OrderModel.create(order, function(error, order) {
                error ? deferred.reject(error) : deferred.resolve(order);
            });
            return deferred.promise;
        }
        
        function findAllOrders() {
            var deferred = q.defer();
            OrderModel.find(function(error, orders) {
                error ? deferred.reject(error) : deferred.resolve(orders);
            });
            return deferred.promise;
        }
        
        function findAllOrdersByDriver(driverID) {
            var deferred = q.defer();
            OrderModel.find({driverID: driverID}, function(error, orders) {
                error ? deferred.reject(error) : deferred.resolve(orders);
            });
            return deferred.promise;
        }
        
        function findAllOrdersByCustomer(customerID) {
            var deferred = q.defer();
            OrderModel.find({customerID: customerID}, function(error, orders) {
                error ? deferred.reject(error) : deferred.resolve(orders);
            });
            return deferred.promise;
        }
        
        function findOrder(orderID) {
            var deferred = q.defer();
            OrderModel.findById(orderID, function(error, order) {
                error ? deferred.reject(error) : deferred.resolve(order);
            });
            return deferred.promise;
        }
        
        function updateOrder(orderID, order) {
            var deferred = q.defer();
            OrderModel.findByIdAndUpdate(orderID, order, {new: true}, function(error, order) {
                error ? deferred.reject(error) : deferred.resolve(order);
            });
            return deferred.promise;
        }
        
        function deleteOrder(orderID) {
            var deferred = q.defer();
            OrderModel.findByIdAndRemove(orderID, function(error, order) {
                error ? deferred.reject(error) : deferred.resolve(order);
            });
            return deferred.promise;
        }
        
        function deleteAllOrders() {
            var deferred = q.defer();
            OrderModel.remove({}, function(error, order) {
                if (error) deferred.reject(error);
            });
            return deferred.promise;
        }
        
        deleteAllOrders();
        
        return API;
    };
    
})();