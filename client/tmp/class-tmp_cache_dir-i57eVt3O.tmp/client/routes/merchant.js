define("client/routes/merchant", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];


    var MerchantRoute = Ember.Route.extend({
        model: function(params) 
        {
            var products = this.store.filter('product', function(product) 
            {
                var slug = product.get('merchantID.content._data.slug');
                
                if(slug === params.merchant_slug)
                {
                    return product;
                }

            });

            return products;
        },
      	renderTemplate: function() 
      	{
          	this.render('nav', {  
          	  into: 'application', 
          	  outlet: 'nav',
              controller: 'merchant'
          	}),
            this.render('products', {  
              into: 'application', 
              outlet: 'main',
              controller: 'merchant'
            })
        },
        activate: function() 
        {
            this._super.apply(this, arguments);
        },
        setupController: function(merchant, model) 
        {
            console.log(model);
            merchant.set('model', model)
        }
    })

    __exports__["default"] = MerchantRoute;
  });