(function() {
    
    module.exports = function(app, model) {

        app.post('/api/project/order', createOrder);
        app.get('/api/project/order', findAllOrders);
        app.get('/api/project/customer/:customerID/order', findAllOrdersByCustomer);
        app.get('/api/project/driver/:driverID/order', findAllOrdersByDriver);
        app.get('/api/project/order/:ID', findOrder);
        app.put('/api/project/order/:ID', updateOrder);
        app.delete('/api/project/order/:ID', deleteOrder);

        function createOrder(req, res) {
            model.createOrder(req.body).then(function(order) {
                res.json(order);
            });
        }
        
        function findAllOrders(req, res) {
            model.findAllOrders().then(function(orders) {
                res.json(orders);
            });
        }
        
        function findAllOrdersByCustomer(req, res) {
            model.findAllOrdersByCustomer(req.params.customerID).then(function(orders) {
                res.json(orders);
            });
        }
        
        function findAllOrdersByDriver(req, res) {
            model.findAllOrdersByDriver(req.params.driverID).then(function(orders) {
                res.json(orders);
            });
        }
        
        function findOrder(req, res) {
            model.findOrder(req.params.ID).then(function(order) {
                res.json(order);
            });
        }

        function updateOrder(req, res) {
            model.updateOrder(req.params.ID, req.body).then(function(order) {
                res.json(order);
            });
        }

        function deleteOrder(req, res) {
            model.deleteOrder(req.params.ID).then(function(order) {
                res.json(order);
            });
        }
    }
    
})();