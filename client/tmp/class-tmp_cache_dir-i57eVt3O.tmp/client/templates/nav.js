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