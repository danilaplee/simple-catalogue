import DS from "ember-data";

var apiNamespace = 'store';

var apiUrl = 'http://104.236.91.69:3000';

var AppAdapter = DS.RESTAdapter.extend({
    namespace: apiNamespace,
    host: apiUrl
});

export default AppAdapter;