(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('UserController', userController);
    
    function userController($rootScope, $location, UserService) {
        
        var model = this;
        
        model.roles = [
            {
                name: 'Customer',
                value: 'ProjectCustomerModel'
            },
            {
                name: 'Driver',
                value: 'ProjectDriverModel'
            },
            {
                name: 'Manager',
                value: 'ProjectManagerModel'
            }
        ]
        var currentRole = model.roles[0];
        
        function fetchUsers() {
            function onSuccess(response) {
                model.users = response.data;
            }
            UserService.findAllUsers().then(onSuccess);
        }
        fetchUsers();
        
        model.deleteUser = function(user) {
            UserService.deleteUser(user._id).then(fetchUsers);
        };

        model.selectUser = function(user) {
            model.newUser = JSON.parse(JSON.stringify(user));
        };

        model.addUser = function(newUser) {
            delete newUser._id;
            if (currentRole.name == 'Customer') UserService.createCustomer(newUser).then(fetchUsers);
            if (currentRole.name == 'Driver') UserService.createDriver(newUser).then(fetchUsers);
            if (currentRole.name == 'Manager') UserService.createManager(newUser).then(fetchUsers);
        };

        model.updateUser = function(user) {
            if (user._id) {
                if (currentRole.name == 'Customer') UserService.updateCustomer(user._id, user).then(fetchUsers);
                if (currentRole.name == 'Driver') UserService.updateDriver(user._id, user).then(fetchUsers);
                if (currentRole.name == 'Manager') UserService.updateManager(user._id, user).then(fetchUsers);
            }
            else model.addUser(user);
        };
        
        model.selectRole = function(role) {
            currentRole = role;
            model.newUser.__t = role.value;
        };
        
        model.getRole = function(user) {
            if (user.__t == 'ProjectManagerModel') return 'Manager';
            if (user.__t == 'ProjectCustomerModel') return 'Customer';
            if (user.__t == 'ProjectDriverModel') return 'Driver';
        }
    }
    
})();