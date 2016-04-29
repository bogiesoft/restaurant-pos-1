(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('ProfileController', profileController);
    
    function profileController($rootScope, UserService) {
        
        var model = this;
        
        function updateUser() {
            var userID = localStorage.getItem('user');
            function onSuccess(response) {
                model.user = response.data;
            }
            UserService.findUser(userID).then(onSuccess);
        }
        updateUser();
        
        $rootScope.$on('userChanged', updateUser);
        
        model.update = function (user) {
            function onSuccess(updatedUser) {
                localStorage.setItem('user', updatedUser._id);
            }
            if (model.user.__t == 'ProjectManagerModel') UserService.updateManager(localStorage.getItem('user'), user, onSuccess);
            if (model.user.__t == 'ProjectCustomerModel') UserService.updateCustomer(localStorage.getItem('user'), user, onSuccess);
            if (model.user.__t == 'ProjectDriverModel') UserService.updateDriver(localStorage.getItem('user'), user, onSuccess);
        };
    }
    
})();