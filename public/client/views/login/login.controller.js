(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('LoginController', loginController);
    
    function loginController($rootScope, $location, UserService) {
        
        var model = this;
        
        model.login = function (user) { 
            function onSuccess(response) {
                console.log(response);
                localStorage.setItem('user', response.data._id);
                $rootScope.$broadcast('userChanged');
                $location.path('/home');
            }
            UserService.findUserByCredentials(user).then(onSuccess);
        }
    }
    
})();