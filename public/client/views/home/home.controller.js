(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('HomeController', homeController);
    
    function homeController($location, ItemService, UserService) {
        
        var model = this;
        
        function updateUser() {
            var userID = localStorage.getItem('user');
            function onSuccess(response) {
                model.user = response.data;
            }
            if (userID) UserService.findUser(userID).then(onSuccess);
            else model.user = null;
        }
        updateUser();
        
        function onSuccess(response) {
            model.menu = response.data;
        }
        ItemService.findAllItems().then(onSuccess);
        
        model.beginOrder = function () {
            $location.path('/place-order');
        }
        
        model.editMenu = function () {
            $location.path('/edit-menu');
        }
    }
    
})();