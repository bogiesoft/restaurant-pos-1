(function() {
    
    module.exports = function(app, model) {

        app.post('/api/project/customer', createCustomer);
        app.post('/api/project/driver', createDriver);
        app.post('/api/project/manager', createManager);
        app.get('/api/project/user', findAllUsersOrFindUserByCredentials);
        app.get('/api/project/customer', findAllCustomers);
        app.get('/api/project/driver', findAllDrivers);
        app.get('/api/project/manager', findAllManagers);
        app.get('/api/project/user/:ID', findUser);
        app.put('/api/project/user/:ID', updateUser);
        app.put('/api/project/customer/:ID', updateCustomer);
        app.put('/api/project/driver/:ID', updateDriver);
        app.put('/api/project/manager/:ID', updateManager);
        app.delete('/api/project/user/:ID', deleteUser);
        
        function findAllUsersOrFindUserByCredentials(req, res) {
            if (req.query.username && req.query.password) {
                findUserByCredentials(req, res)
            }
            else {
                findAllUsers(req, res);
            }
        }

        function createCustomer(req, res) {
            model.createCustomer(req.body).then(function(customer) {
                res.json(customer);
            });
        }
        
        function createDriver(req, res) {
            model.createDriver(req.body).then(function(driver) {
                res.json(driver);
            });
        }
        
        function createManager(req, res) {
            model.createManager(req.body).then(function(manager) {
                res.json(manager);
            });
        }

        function findAllUsers(req, res) {
            model.findAllUsers().then(function(users) {
                res.json(users);
            });
        }
        
        function findAllCustomers(req, res) {
            model.findAllCustomers().then(function(customers) {
                res.json(customers);
            });
        }
        
        function findAllDrivers(req, res) {
            model.findAllDrivers().then(function(drivers) {
                res.json(drivers);
            });
        }
        
        function findAllManagers(req, res) {
            model.findAllManagers().then(function(managers) {
                res.json(managers);
            });
        }

        function findUser(req, res) {
            model.findUser(req.params.ID).then(function(user) {
                res.json(user);
            });
        }

        function findUserByCredentials(req, res) {
            console.log(req);
            model.findUserByCredentials(req.query).then(function(user) {
                res.json(user);
            });
        }

        function updateUser(req, res) {
            model.updateUser(req.params.ID, req.body).then(function(user) {
                res.json(user);
            });
        }
        
        function updateCustomer(req, res) {
            model.updateCustomer(req.params.ID, req.body).then(function(user) {
                res.json(user);
            });
        }
        
        function updateDriver(req, res) {
            model.updateDriver(req.params.ID, req.body).then(function(user) {
                res.json(user);
            });
        }
        
        function updateManager(req, res) {
            model.updateManager(req.params.ID, req.body).then(function(user) {
                res.json(user);
            });
        }

        function deleteUser(req, res) {
            model.deleteUser(req.params.ID).then(function(user) {
                res.json(user);
            });
        }
    }
    
})();