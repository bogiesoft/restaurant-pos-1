(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('LogoutController', logoutController);
    
    function logoutController($rootScope, $location) {
        
        var model = this;
        
        model.logout = function () { 
            localStorage.removeItem('user');
            $rootScope.$broadcast('userChanged');
            $location.path('/home');
        }
    }
    
})();