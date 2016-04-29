(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.factory('UserService', UserService);
    
    function UserService($http, $q) {
        
        var service = {
            createCustomer: createCustomer,
            createDriver: createDriver,
            createManager: createManager,
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
        
        function createCustomer(user) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.post('/api/project/customer', user).then(onSuccess);
            return deferred.promise;
        }
        
        function createDriver(user) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.post('/api/project/driver', user).then(onSuccess);
            return deferred.promise;
        }
        
        function createManager(user) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.post('/api/project/manager', user).then(onSuccess);
            return deferred.promise;
        }
        
        function findAllUsers() {
            var deferred = $q.defer();
            function onSuccess(users) {
                deferred.resolve(users);
            }
            $http.get('/api/project/user').then(onSuccess);
            return deferred.promise;
        }
        
        function findAllCustomers() {
            var deferred = $q.defer();
            function onSuccess(users) {
                deferred.resolve(users);
            }
            $http.get('/api/project/customer').then(onSuccess);
            return deferred.promise;
        }
        
        function findAllDrivers() {
            var deferred = $q.defer();
            function onSuccess(users) {
                deferred.resolve(users);
            }
            $http.get('/api/project/driver').then(onSuccess);
            return deferred.promise;
        }
        
        function findAllManagers() {
            var deferred = $q.defer();
            function onSuccess(users) {
                deferred.resolve(users);
            }
            $http.get('/api/project/manager').then(onSuccess);
            return deferred.promise;
        }
        
        function findUser(userID) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.get('/api/project/user/' + userID).then(onSuccess);
            return deferred.promise;
        }
        
        function findUserByCredentials(credentials) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.get('/api/project/user?username=' + credentials.username + '&password=' + credentials.password).then(onSuccess);
            return deferred.promise;
        }
        
        function updateUser(userID, user) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.put('/api/project/user/' + userID, user).then(onSuccess);
            return deferred.promise;
        }
        
        function updateCustomer(userID, user) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.put('/api/project/customer/' + userID, user).then(onSuccess);
            return deferred.promise;
        }
        
        function updateDriver(userID, user) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.put('/api/project/driver/' + userID, user).then(onSuccess);
            return deferred.promise;
        }
        
        function updateManager(userID, user) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.put('/api/project/manager/' + userID, user).then(onSuccess);
            return deferred.promise;
        }
        
        function deleteUser(userID) {
            var deferred = $q.defer();
            function onSuccess(user) {
                deferred.resolve(user);
            }
            $http.delete('/api/project/user/' + userID).then(onSuccess);
            return deferred.promise;
        }
        
        return service;
    };
    
})();