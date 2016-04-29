(function() {
    
    module.exports = function(mongoose, db) {
        
        var q = require('q');
    
        var ItemSchema = require('./item.schema.js')(mongoose);
        var ItemModel = mongoose.model('ProjectItemModel', ItemSchema);
        
        var itemsMock = require('./item.mock.json');

        var API = {
            createItem: createItem,
            findAllItems: findAllItems,
            findItem: findItem,
            updateItem: updateItem,
            deleteItem: deleteItem
        };
        
        function createItem(item) {
            var deferred = q.defer();
            ItemModel.create(item, function(error, item) {
                error ? deferred.reject(error) : deferred.resolve(item);
            });
            return deferred.promise;
        }
        
        function findAllItems() {
            var deferred = q.defer();
            ItemModel.find(function(error, items) {
                error ? deferred.reject(error) : deferred.resolve(items);
            });
            return deferred.promise;
        }
        
        function findItem(itemID) {
            var deferred = q.defer();
            ItemModel.findById(itemID, function(error, item) {
                error ? deferred.reject(error) : deferred.resolve(item);
            });
            return deferred.promise;
        }
        
        function updateItem(itemID, item) {
            var deferred = q.defer();
            ItemModel.findByIdAndUpdate(itemID, item, {new: true}, function(error, item) {
                error ? deferred.reject(error) : deferred.resolve(item);
            });
            return deferred.promise;
        }
        
        function deleteItem(itemID) {
            var deferred = q.defer();
            ItemModel.findByIdAndRemove(itemID, function(error, item) {
                error ? deferred.reject(error) : deferred.resolve(item);
            });
            return deferred.promise;
        }
        
        function deleteAllItems() {
            var deferred = q.defer();
            ItemModel.remove({}, function(error) {
                if (error) deferred.reject(error);
            });
            return deferred.promise;
        }
        
        deleteAllItems();
        for (i in itemsMock) createItem(itemsMock[i]);
        
        return API;
    };
    
})();