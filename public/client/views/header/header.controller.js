(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('HeaderController', headerController);
    
    function headerController($rootScope, $location, UserService) {
        
        var model = this;
        model.location = $location;
        
        var watcher;
        
        function updateUser() {
            var userID = localStorage.getItem('user');
            function onSuccess(response) {
                model.user = response.data;
                if (model.user.__t == 'ProjectDriverModel') {
                    console.log('here');
                    watcher = navigator.geolocation.watchPosition(updateLocation);
                }
            }
            if (userID) UserService.findUser(userID).then(onSuccess);
            else {
                model.user = null;
                navigator.geolocation.clearWatch(watcher);
            }
        }
        updateUser();
        
        function updateLocation(position) {
            console.log(position);
            model.user.location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
            function onSuccess(response) {
                console.log(response.data);
            }
            UserService.updateDriver(model.user._id, model.user).then(onSuccess);
        }
        
        $rootScope.$on('userChanged', updateUser);
    }
    
})();