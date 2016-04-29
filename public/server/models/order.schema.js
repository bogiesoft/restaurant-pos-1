(function() {
        
    module.exports = function(mongoose) {
        
        var ObjectId = mongoose.Schema.Types.ObjectId;
    
        var orderSchema = {
            items: [{
                itemID: ObjectId,
                quantity: Number,
                name: String,
                price: Number
            }],
            subtotal: Number,
            customerID: ObjectId,
            driverID: ObjectId,
            status: {
                type: String,
                enum: ['Pending', 'Confirmed', 'Ready to Deliver', 'On Delivery', 'Delivered']
            },
            timePlaced: Date,
            timeDelivered: Date,
            review: {
                itemsRating: Number,
                itemsReview: String,
                deliveryRating: Number,
                deliveryReview: String
            }
        };

        var orderSchemaOptions = {
            collection: 'cs5610.project.order'
        };

        var OrderSchema = mongoose.Schema(orderSchema, orderSchemaOptions);

        return OrderSchema;
    };
    
})();