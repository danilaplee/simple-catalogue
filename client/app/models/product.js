import DS from "ember-data";

var product = DS.Model.extend(
{
	name:DS.attr('string'),
	slug:DS.attr('string'),
	price:DS.attr('number'),
	link_to_image:DS.attr('string'),
	categoryID:DS.hasMany('category', {async: true}),
	merchantID:DS.belongsTo('merchant', {async: true})
});

export default product;