(function() {
    
    module.exports = function(mongoose) {
    
        var itemSchema = {
            name: String,
            description: String,
            price: Number
        };

        var itemSchemaOptions = {
            collection: 'cs5610.project.item'
        };

        var ItemSchema = mongoose.Schema(itemSchema, itemSchemaOptions);

        return ItemSchema;
    };
    
})();