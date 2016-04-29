(function(){
    
    "use strict";
    
    var app = angular.module('RestaurantPOS');
    
    app.controller('EditMenuController', editMenuController);
    
    function editMenuController($rootScope, $location, UserService, ItemService) {
        
        var model = this;
        
        function fetchItems() {
            function onSuccess(response) {
                model.items = response.data;
            }
            ItemService.findAllItems().then(onSuccess);
        }
        fetchItems();
        
        model.deleteItem = function(item) {
            ItemService.deleteItem(item._id).then(fetchItems);
        };

        model.selectItem = function(item) {
            model.newItem = JSON.parse(JSON.stringify(item));
        };

        model.addItem = function(newItem) {
            delete newItem._id;
            ItemService.createItem(newItem).then(fetchItems);
        };

        model.updateItem = function(item) {
            if (item._id) ItemService.updateItem(item._id, item).then(fetchItems);
            else model.addItem(item);
        };
    }
    
})();