(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.config(function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.view.html',
            controller: 'HomeController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/login', {
            templateUrl: 'views/login/login.view.html',
            controller: 'LoginController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/register', {
            templateUrl: 'views/register/register.view.html',
            controller: 'RegisterController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/logout', {
            templateUrl: 'views/logout/logout.view.html',
            controller: 'LogoutController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/profile', {
            templateUrl: 'views/profile/profile.view.html',
            controller: 'ProfileController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/place-order', {
            templateUrl: 'views/place-order/place-order.view.html',
            controller: 'PlaceOrderController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/order', {
            templateUrl: 'views/order/order.view.html',
            controller: 'OrderController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/edit-menu', {
            templateUrl: 'views/edit-menu/edit-menu.view.html',
            controller: 'EditMenuController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/manage-users', {
            templateUrl: 'views/manage-users/manage-users.view.html',
            controller: 'ManageUsersController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/order/:orderID/track', {
            templateUrl: 'views/track/track.view.html',
            controller: 'TrackController',
            controllerAs: 'model'
        });
        
        $routeProvider.when('/user', {
            templateUrl: 'views/user/user.view.html',
            controller: 'UserController',
            controllerAs: 'model'
        });

        $routeProvider.otherwise('/home');

    });
    
})();