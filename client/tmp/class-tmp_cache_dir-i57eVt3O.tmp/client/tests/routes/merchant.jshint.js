define("client/tests/routes/merchant.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/merchant.js should pass jshint', function() { 
      ok(false, 'routes/merchant.js should pass jshint.\nroutes/merchant.js: line 31, col 10, Expected an assignment or function call and instead saw an expression.\nroutes/merchant.js: line 31, col 11, Missing semicolon.\nroutes/merchant.js: line 40, col 37, Missing semicolon.\nroutes/merchant.js: line 42, col 3, Missing semicolon.\n\n4 errors'); 
    });
  });