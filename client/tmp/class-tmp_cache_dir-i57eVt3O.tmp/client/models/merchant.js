define("client/models/merchant", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    var merchant = DS.Model.extend(
    { 
    	name: DS.attr('string'), 
    	slug: DS.attr('string'),
    	products: DS.hasMany('products', {async: true})
    });

    __exports__["default"] = merchant;
  });