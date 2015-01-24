define("client/router", 
  ["ember","client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend(
    {
      location: config.locationType
    });

    Router.map(function() 
    {
    	this.route('shop', {path:'/'})

    	this.route('category', {path:'/category/:category_slug'})

    	this.route('merchant', {path:'/merchant/:merchant_slug'})

    });

    __exports__["default"] = Router;
  });