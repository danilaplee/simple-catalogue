define("client/adapters/application", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    var apiNamespace = 'store';

    var apiUrl = 'http://0.0.0.0:3000';

    var AppAdapter = DS.RESTAdapter.extend({
        namespace: apiNamespace,
        host: apiUrl
    });

    __exports__["default"] = AppAdapter;
  });