(function() {
    
    module.exports = function(mongoose, db) {
        
        var q = require('q');
    
        var UserSchema = require('./user.schema.js')(mongoose);
        var CustomerDiscriminatorSchema = require('./customer.schema.js')(mongoose);
        var DriverDiscriminatorSchema = require('./driver.schema.js')(mongoose);
        var ManagerDiscriminatorSchema = require('./manager.schema.js')(mongoose);
        var discriminatorOptions = { discriminatorKey: 'role' };
        var UserModel = mongoose.model('ProjectUserModel', UserSchema);
        var CustomerModel = UserModel.discriminator('ProjectCustomerModel', CustomerDiscriminatorSchema, discriminatorOptions);
        var DriverModel = UserModel.discriminator('ProjectDriverModel', DriverDiscriminatorSchema, discriminatorOptions);
        var ManagerModel = UserModel.discriminator('ProjectManagerModel', ManagerDiscriminatorSchema, discriminatorOptions);
        
        var customersMock = require('./customer.mock.json');
        var driversMock = require('./driver.mock.json');
        var managersMock = require('./manager.mock.json');

        var API = {
            createCustomer: createCustomer,
            createManager: createManager,
            createDriver: createDriver,
            findAllUsers: findAllUsers,
            findAllCustomers: findAllCustomers,
            findAllDrivers: findAllDrivers,
            findAllManagers: findAllManagers,
            findUser: findUser,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            updateCustomer: updateCustomer,
            updateDriver: updateDriver,
            updateManager: updateManager,
            deleteUser: deleteUser
        };
        
        function createCustomer(customer) {
            var deferred = q.defer();
            CustomerModel.create(customer, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function createManager(manager) {
            var deferred = q.defer();
            ManagerModel.create(manager, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function createDriver(driver) {
            var deferred = q.defer();
            DriverModel.create(driver, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function findAllUsers() {
            var deferred = q.defer();
            UserModel.find(function(error, users) {
                error ? deferred.reject(error) : deferred.resolve(users);
            });
            return deferred.promise;
        }
        
        function findAllCustomers() {
            var deferred = q.defer();
            CustomerModel.find(function(error, customers) {
                error ? deferred.reject(error) : deferred.resolve(customers);
            });
            return deferred.promise;
        }
        
        function findAllDrivers() {
            var deferred = q.defer();
            DriverModel.find(function(error, drivers) {
                error ? deferred.reject(error) : deferred.resolve(drivers);
            });
            return deferred.promise;
        }
        
        function findAllManagers() {
            var deferred = q.defer();
            ManagerModel.find(function(error, managers) {
                error ? deferred.reject(error) : deferred.resolve(managers);
            });
            return deferred.promise;
        }
        
        function findUser(userID) {
            var deferred = q.defer();
            UserModel.findById(userID, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function findUserByCredentials(credentials) {
            var deferred = q.defer();
            UserModel.findOne(credentials, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function updateUser(userID, user) {
            var deferred = q.defer();
            UserModel.findByIdAndUpdate(userID, user, {new: true}, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function updateCustomer(userID, user) {
            var deferred = q.defer();
            CustomerModel.findByIdAndUpdate(userID, user, {new: true}, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function updateDriver(userID, user) {
            var deferred = q.defer();
            DriverModel.findByIdAndUpdate(userID, user, {new: true}, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function updateManager(userID, user) {
            var deferred = q.defer();
            ManagerModel.findByIdAndUpdate(userID, user, {new: true}, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function deleteUser(userID) {
            var deferred = q.defer();
            UserModel.findByIdAndRemove(userID, function(error, user) {
                error ? deferred.reject(error) : deferred.resolve(user);
            });
            return deferred.promise;
        }
        
        function deleteAllUsers() {
            var deferred = q.defer();
            UserModel.remove({}, function(error) {
                if (error) deferred.reject(error);
            });
            return deferred.promise;
        }
        
        deleteAllUsers();
        for (c in customersMock) createCustomer(customersMock[c]);
        for (d in driversMock) createDriver(driversMock[d]);
        for (m in managersMock) createManager(managersMock[m]);
        
        return API;
    };
    
})();