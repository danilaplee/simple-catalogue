import Ember from 'ember';
import config from './config/environment';

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

export default Router;
