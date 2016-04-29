(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('ManageUsersController', manageUsersController);
    
    function manageUsersController(UserService) {
        
        var model = this;
        
        function fetchUsers() {
            function onSuccess(response) {
                model.users = response.data;
            }
            UserService.findAllUsers().then(onSuccess);
        }
        fetchUsers();
        
        model.getRole = function(user) {
            if (user.__t == 'ProjectManagerModel') return 'Manager';
            if (user.__t == 'ProjectCustomerModel') return 'Customer';
            if (user.__t == 'ProjectDriverModel') return 'Driver';
        };
    }
    
})();