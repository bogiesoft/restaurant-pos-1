(function() {
    
    module.exports = function(mongoose) {
    
        var customerDiscriminatorSchema = {
            address: String,
        };

        var customerDiscriminatorSchemaOptions = {
            
        };

        var CustomerDiscriminatorSchema = mongoose.Schema(customerDiscriminatorSchema, customerDiscriminatorSchemaOptions);

        return CustomerDiscriminatorSchema;
    };
    
})();