/**
 * http://usejsdoc.org/
 */

function routeConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();
}


routeConfig.prototype.init = function () {
    var self = this;

    this.addRoutes();
    this.processRoutes();

}



routeConfig.prototype.processRoutes = function () {
    var self = this;
    self.routeTable.forEach(function (route) {

        if (route.requestType == 'get') {
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') { }
        else if (route.requestType == 'delete') { }

    });

}


routeConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({

        requestType : 'get',
        requestUrl: '/',
        callbackFunction: function (request, response) {

            response.render('index', { title: "index" });
        }
    });

//
//    self.routeTable.push({
//
//        requestType: 'post',
//        requestUrl: '/createProductCategory',
//        callbackFunction: function (request, response) {
//
//          //  response.render('createProductCategory', { title: "Create Product Category" });
//
//            //dao to write it to db
//        }
//    });


};


module.exports = routeConfig;