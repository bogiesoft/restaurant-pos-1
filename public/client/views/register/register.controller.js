(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('RegisterController', registerController);
    
    function registerController($rootScope, $location, UserService) {
        
        var model = this;
        
        model.register = function (user, passwordVerification) { 
            function onSuccess(response) {
                console.log(response);
                localStorage.setItem('user', response.data._id);
                $rootScope.$broadcast('userChanged');
                $location.path('/home');
            }
            if (user.password == passwordVerification) {
                UserService.createCustomer(user).then(onSuccess);
            }
        }
    }
    
})();