(function() {
    
    module.exports = function(app, model) {

        app.post('/api/project/item', createItem);
        app.get('/api/project/item', findAllItems);
        app.get('/api/project/item/:ID', findItem);
        app.put('/api/project/item/:ID', updateItem);
        app.delete('/api/project/item/:ID', deleteItem);

        function createItem(req, res) {
            model.createItem(req.body).then(function(item) {
                res.json(item);
            });
        }
        
        function findAllItems(req, res) {
            model.findAllItems().then(function(items) {
                res.json(items);
            });
        }
        
        function findItem(req, res) {
            model.findItem(req.params.ID).then(function(item) {
                res.json(item);
            });
        }

        function updateItem(req, res) {
            model.updateItem(req.params.ID, req.body).then(function(item) {
                res.json(item);
            });
        }

        function deleteItem(req, res) {
            model.deleteItem(req.params.ID).then(function(item) {
                res.json(item);
            });
        }
    }
    
})();