define("client/controllers/merchant", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var ShopController = Ember.ArrayController.extend({
    	selection: null,
      	valueObserver: function() {
      		var selection = this.get('selection')
      		if(selection != null)
      		{
      			var product = this.store.filter('product', function(product) 
    	        {
    	            var id = product.get('id');
    	            
    	            if(id === selection.id)
    	            {
    	                return product;
    	            }

    	        });
    	        this.set('model', product);
      		}
      		else
      		{
      			var products = this.store.find('product');
      			this.set('model', products)
      		}
      	}.observes('selection'),
    	products: function() 
    	{
    		this.get('model');
    		return this.get('model');

    	}.property('model'),
    	merchants: function() 
    	{
    		return this.store.find('merchant')

    	}.property('model'),
    	category: function() 
    	{
    		return this.store.find('category')

    	}.property('model'),
    	searchProducts: function() 
    	{
    		return this.store.find('product')

    	}.property('model')
    })

    __exports__["default"] = ShopController;
  });