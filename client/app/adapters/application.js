import DS from "ember-data";

var apiNamespace = 'store';

var apiUrl = 'http://0.0.0.0:3000';

var AppAdapter = DS.RESTAdapter.extend({
    namespace: apiNamespace,
    host: apiUrl
});

export default AppAdapter;