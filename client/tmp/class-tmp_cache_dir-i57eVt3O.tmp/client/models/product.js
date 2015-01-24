define("client/models/product", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    var product = DS.Model.extend(
    {
    	name:DS.attr('string'),
    	slug:DS.attr('string'),
    	price:DS.attr('number'),
    	link_to_image:DS.attr('string'),
    	categoryID:DS.hasMany('category', {async: true}),
    	merchantID:DS.belongsTo('merchant', {async: true})
    });

    __exports__["default"] = product;
  });