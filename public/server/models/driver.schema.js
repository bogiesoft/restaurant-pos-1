(function() {
    
    module.exports = function(mongoose) {
    
        var driverDiscriminatorSchema = {
            location: {
                latitude: Number,
                longitude: Number
            }
        };

        var driverDiscriminatorSchemaOptions = {
            
        };

        var DriverDiscriminatorSchema = mongoose.Schema(driverDiscriminatorSchema, driverDiscriminatorSchemaOptions);

        return DriverDiscriminatorSchema;
    };
    
})();