(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('TrackController', trackController);
    
    function trackController($location, OrderService, UserService, $routeParams, $interval) {
        
        var model = this;
        var repeater;
        
        function initializeMap() {
            var map = document.getElementById('map');
            var center = new google.maps.LatLng(47.6019687, -122.3265884)
            var mapOptions = {
                zoom: 14,
                mapTypeControl: false,
                streetViewControl: false,
                panControl: false,
                zoomControl: false
            }
            model.map = new google.maps.Map(map, mapOptions);
            model.map.setCenter(center);
            var markerOptions = {
                map: model.map
            }
            model.marker = new google.maps.Marker(markerOptions);
        }
        initializeMap();
        
        function fetchOrder() {
            function onSuccess(response) {
                var driverID = response.data.driverID;
                repeater = $interval(function() {
                    UserService.findUser(driverID).then(onSuccess2);    
                }, 3000);
            }
            function onSuccess2(response) {
                var driverLocation = response.data.location;
                var center = new google.maps.LatLng(driverLocation.latitude, driverLocation.longitude);
                model.map.setCenter(center);
                model.marker.setPosition(center);
            }
            OrderService.findOrder($routeParams.orderID).then(onSuccess);
        }
        fetchOrder();
    }
    
})();
        
        