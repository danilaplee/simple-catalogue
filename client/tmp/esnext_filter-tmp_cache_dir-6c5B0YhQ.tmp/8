import DS from "ember-data";

var category = DS.Model.extend(
{ 
	name: DS.attr('string'), 
	slug: DS.attr('string'),
	products: DS.hasMany('products', {async: true})
});

export default category;