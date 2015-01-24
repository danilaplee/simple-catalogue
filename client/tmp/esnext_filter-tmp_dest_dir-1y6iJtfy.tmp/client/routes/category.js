import Ember from 'ember';


var CategoryRoute = Ember.Route.extend({
    model: function(params) 
    {
	    var products = this.store.filter('product', function(product) 
	    {
	    	var slugs = product.get('categoryID.content.content');
	    	for (var i = slugs.length - 1; i >= 0; i--) 
	    	{
	    		var slug = slugs[i].get('_data.slug');
	    		
	            if(slug === params.category_slug)
	            {
	                return product;
	            }
	    	};

	    });

      	return products;
    },
  	renderTemplate: function() 
  	{
      	this.render('nav', {  
      	  into: 'application', 
      	  outlet: 'nav',
          controller: 'category'
      	});
        this.render('products', {  
          into: 'application', 
          outlet: 'main',
          controller: 'category'
        })
    },
    activate: function() 
    {
        this._super.apply(this, arguments);
    },
    setupController: function(category, model) 
    {
        console.log(model);
        category.set('model', model)
    }
});

export default CategoryRoute;