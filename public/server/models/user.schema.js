(function() {
    
    module.exports = function(mongoose) {
    
        var userSchema = {
            firstName: String,
            lastName: String,
            username: String,
            password: String
        };

        var userSchemaOptions = {
            collection: 'cs5610.project.user'
        };

        var UserSchema = mongoose.Schema(userSchema, userSchemaOptions);

        return UserSchema;
    };
    
})();