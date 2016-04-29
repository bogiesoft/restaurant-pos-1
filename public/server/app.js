(function() {
    
    module.exports = function(app, mongoose, db) {
    
        var userModel = require('./models/user.model.js')(mongoose, db);
        var itemModel = require('./models/item.model.js')(mongoose, db);
        var orderModel = require('./models/order.model.js')(mongoose, db);

        require('./services/user.service.js')(app, userModel);
        require('./services/item.service.js')(app, itemModel);
        require('./services/order.service.js')(app, orderModel);

    };
    
})();