import Ember from 'ember';


var ShopRoute = Ember.Route.extend({
    model: function() 
    {
      return this.store.find('product');
    },
  	renderTemplate: function() 
  	{
      	this.render('nav', {  
      	  into: 'application', 
      	  outlet: 'nav',
          controller: 'shop'
      	}),
        this.render('products', {  
          into: 'application', 
          outlet: 'main',
          controller: 'shop'
        })
    },
    activate: function() 
    {
        this._super.apply(this, arguments);
    },
    setupController: function(shop, model) 
    {
        shop.set('model', model)
    }
})

export default ShopRoute;