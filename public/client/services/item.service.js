(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.factory('ItemService', ItemService);
    
    function ItemService($http, $q) {
        
        var service = {
            createItem: createItem,
            findAllItems: findAllItems,
            findItem: findItem,
            updateItem: updateItem,
            deleteItem: deleteItem
        };
        
        function createItem(item) {
            var deferred = $q.defer();
            function onSuccess(item) {
                deferred.resolve(item);
                console.log(item);
            }
            console.log(item);
            $http.post('/api/project/item', item).then(onSuccess);
            return deferred.promise;
        }
        
        function findAllItems() {
            var deferred = $q.defer();
            function onSuccess(items) {
                deferred.resolve(items);
            }
            $http.get('/api/project/item').then(onSuccess);
            return deferred.promise;
        }
        
        function findItem(itemID) {
            var deferred = $q.defer();
            function onSuccess(item) {
                deferred.resolve(item);
            }
            $http.get('/api/project/item/' + itemID).then(onSuccess);
            return deferred.promise;
        }
        
        function updateItem(itemID, item) {
            var deferred = $q.defer();
            function onSuccess(item) {
                deferred.resolve(item);
            }
            $http.put('/api/project/item/' + itemID, item).then(onSuccess);
            return deferred.promise;
        }
        
        function deleteItem(itemID) {
            var deferred = $q.defer();
            function onSuccess(item) {
                deferred.resolve(item);
            }
            $http.delete('/api/project/item/' + itemID).then(onSuccess);
            return deferred.promise;
        }
        
        return service;
    };
    
})();