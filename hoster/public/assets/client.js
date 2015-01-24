define("client/adapters/application", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    var apiNamespace = 'store';

    var apiUrl = 'http://104.236.91.69:3000';

    var AppAdapter = DS.RESTAdapter.extend({
        namespace: apiNamespace,
        host: apiUrl
    });

    __exports__["default"] = AppAdapter;
  });
define("client/app", 
  ["ember","ember/resolver","ember/load-initializers","client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });


    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("client/components/ember-selectize", 
  ["ember-cli-selectize/components/ember-selectize","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var EmberSelectizeComponent = __dependency1__["default"];

    __exports__["default"] = EmberSelectizeComponent;
  });
define("client/controllers/category", 
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
define("client/controllers/product", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var ProductController = Ember.ObjectController.extend({

    })

    __exports__["default"] = ProductController;
  });
define("client/controllers/shop", 
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
define("client/initializers/export-application-global", 
  ["ember","client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("client/models/category", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    var category = DS.Model.extend(
    { 
    	name: DS.attr('string'), 
    	slug: DS.attr('string'),
    	products: DS.hasMany('products', {async: true})
    });

    __exports__["default"] = category;
  });
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
define("client/routes/category", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];


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

    __exports__["default"] = CategoryRoute;
  });
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
define("client/routes/shop", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];


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

    __exports__["default"] = ShopRoute;
  });
define("client/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "nav", options) : helperMissing.call(depth0, "outlet", "nav", options))));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sidebar", options) : helperMissing.call(depth0, "outlet", "sidebar", options))));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "main", options) : helperMissing.call(depth0, "outlet", "main", options))));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("client/templates/category", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("client/templates/merchant", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("client/templates/nav", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "name", "merchant", "slug", options) : helperMissing.call(depth0, "link-to", "name", "merchant", "slug", options))));
      data.buffer.push("</li>\n            ");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "name", "category", "slug", options) : helperMissing.call(depth0, "link-to", "name", "category", "slug", options))));
      data.buffer.push("</li>\n            ");
      return buffer;
      }

      data.buffer.push("<div class=\"navbar navbar-default\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"/\">Catalogue</a>\n  </div>\n  <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n    <ul class=\"nav navbar-nav\">\n       <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Merchants <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            ");
      stack1 = helpers.each.call(depth0, "controller.merchants", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n          </ul>\n      </li>\n       <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Categories <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            ");
      stack1 = helpers.each.call(depth0, "controller.category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n          </ul>\n      </li>\n      <li>\n        ");
      data.buffer.push(escapeExpression((helper = helpers['ember-selectize'] || (depth0 && depth0['ember-selectize']),options={hash:{
        'content': ("controller.searchProducts"),
        'optionValuePath': ("content.id"),
        'optionLabelPath': ("content.name"),
        'selection': ("controller.selection"),
        'placeholder': ("Search")
      },hashTypes:{'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selection': "ID",'placeholder': "STRING"},hashContexts:{'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selection': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-selectize", options))));
      data.buffer.push("\n      </li>\n    </ul>\n  </div>\n</div>");
      return buffer;
      
    });
  });
define("client/templates/products", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n	<div class=\"panel panel-success col-xs-12 col-md-5 col-lg-3\" style=\"min-height:700px;padding:0px;margin:5px 5px 5px 0px\">\n	  <div class=\"panel-heading\">\n	    <h3 class=\"panel-title\">");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h3>\n	  </div>\n	  <div class=\"panel-body\">\n	    <img style=\"height:auto;width:90%;margin:10px auto;\" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("link_to_image")
      },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n	    <p>\n	    	<strong>PRICE:</strong>\n	    	");
      stack1 = helpers._triageMustache.call(depth0, "price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n	    </p>\n	    <p>\n	    	<strong>MERCHANT:</strong>\n	    	");
      stack1 = helpers._triageMustache.call(depth0, "merchantID.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n	    </p>\n	    <p>\n	    	<strong>CATEGORY:</strong>\n	    	");
      stack1 = helpers.each.call(depth0, "categoryID.content.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n	    </p>\n	  </div>\n	</div>\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n	    		<span class=\"label label-info\" style=\"margin:5px;font-size:14px;\">");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("<span>  \n	    	");
      return buffer;
      }

      stack1 = helpers.each.call(depth0, "controller.products", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("client/templates/shop", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("client/tests/adapters/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - adapters');
    test('adapters/application.js should pass jshint', function() { 
      ok(true, 'adapters/application.js should pass jshint.'); 
    });
  });
define("client/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("client/tests/client/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - client/tests/helpers');
    test('client/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'client/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("client/tests/client/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - client/tests/helpers');
    test('client/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'client/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("client/tests/client/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - client/tests');
    test('client/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'client/tests/test-helper.js should pass jshint.'); 
    });
  });
define("client/tests/controllers/category.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/category.js should pass jshint', function() { 
      ok(false, 'controllers/category.js should pass jshint.\ncontrollers/category.js: line 6, col 48, Missing semicolon.\ncontrollers/category.js: line 24, col 42, Missing semicolon.\ncontrollers/category.js: line 35, col 43, Missing semicolon.\ncontrollers/category.js: line 40, col 43, Missing semicolon.\ncontrollers/category.js: line 45, col 42, Missing semicolon.\ncontrollers/category.js: line 48, col 3, Missing semicolon.\n\n6 errors'); 
    });
  });
define("client/tests/controllers/merchant.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/merchant.js should pass jshint', function() { 
      ok(false, 'controllers/merchant.js should pass jshint.\ncontrollers/merchant.js: line 6, col 48, Missing semicolon.\ncontrollers/merchant.js: line 24, col 42, Missing semicolon.\ncontrollers/merchant.js: line 35, col 43, Missing semicolon.\ncontrollers/merchant.js: line 40, col 43, Missing semicolon.\ncontrollers/merchant.js: line 45, col 42, Missing semicolon.\ncontrollers/merchant.js: line 48, col 3, Missing semicolon.\n\n6 errors'); 
    });
  });
define("client/tests/controllers/product.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/product.js should pass jshint', function() { 
      ok(false, 'controllers/product.js should pass jshint.\ncontrollers/product.js: line 5, col 3, Missing semicolon.\n\n1 error'); 
    });
  });
define("client/tests/controllers/shop.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/shop.js should pass jshint', function() { 
      ok(false, 'controllers/shop.js should pass jshint.\ncontrollers/shop.js: line 6, col 48, Missing semicolon.\ncontrollers/shop.js: line 24, col 42, Missing semicolon.\ncontrollers/shop.js: line 35, col 43, Missing semicolon.\ncontrollers/shop.js: line 40, col 43, Missing semicolon.\ncontrollers/shop.js: line 45, col 42, Missing semicolon.\ncontrollers/shop.js: line 48, col 3, Missing semicolon.\n\n6 errors'); 
    });
  });
define("client/tests/helpers/resolver", 
  ["ember/resolver","client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("client/tests/helpers/start-app", 
  ["ember","client/app","client/router","client/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("client/tests/models/category.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/category.js should pass jshint', function() { 
      ok(true, 'models/category.js should pass jshint.'); 
    });
  });
define("client/tests/models/merchant.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/merchant.js should pass jshint', function() { 
      ok(true, 'models/merchant.js should pass jshint.'); 
    });
  });
define("client/tests/models/product.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/product.js should pass jshint', function() { 
      ok(true, 'models/product.js should pass jshint.'); 
    });
  });
define("client/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(false, 'router.js should pass jshint.\nrouter.js: line 11, col 35, Missing semicolon.\nrouter.js: line 13, col 62, Missing semicolon.\nrouter.js: line 15, col 62, Missing semicolon.\n\n3 errors'); 
    });
  });
define("client/tests/routes/category.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/category.js should pass jshint', function() { 
      ok(false, 'routes/category.js should pass jshint.\nroutes/category.js: line 18, col 14, Unnecessary semicolon.\nroutes/category.js: line 35, col 11, Missing semicolon.\nroutes/category.js: line 44, col 37, Missing semicolon.\n\n3 errors'); 
    });
  });
define("client/tests/routes/merchant.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/merchant.js should pass jshint', function() { 
      ok(false, 'routes/merchant.js should pass jshint.\nroutes/merchant.js: line 31, col 10, Expected an assignment or function call and instead saw an expression.\nroutes/merchant.js: line 31, col 11, Missing semicolon.\nroutes/merchant.js: line 40, col 37, Missing semicolon.\nroutes/merchant.js: line 42, col 3, Missing semicolon.\n\n4 errors'); 
    });
  });
define("client/tests/routes/shop.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/shop.js should pass jshint', function() { 
      ok(false, 'routes/shop.js should pass jshint.\nroutes/shop.js: line 20, col 10, Expected an assignment or function call and instead saw an expression.\nroutes/shop.js: line 20, col 11, Missing semicolon.\nroutes/shop.js: line 28, col 33, Missing semicolon.\nroutes/shop.js: line 30, col 3, Missing semicolon.\n\n4 errors'); 
    });
  });
define("client/tests/test-helper", 
  ["client/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
/* jshint ignore:start */

define('client/config/environment', ['ember'], function(Ember) {
  var prefix = 'client';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("client/tests/test-helper");
} else {
  require("client/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=client.map