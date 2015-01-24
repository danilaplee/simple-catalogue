//OUR MODELS = PRODUCT, MERCHANT, CATEGORY

//MODEL FOR PRODUCT
//{id, name, slug, price, link-to-image, categoryID, merchantID}
//hasMany(category)
//belongsTo(merchant)

//MODEL FOR MERCHANT
//{id, name, slug}
//hasMany(product)

//MODEL FOR CATEGORY
//{id, name, slug}
//hasMany(product)

var express 	= require('express');
var mysql		= require('mysql');
var router 		= express.Router();

var connection 	= mysql.createConnection(
{
	host: 'localhost',
	user: 'swf',
	password: 'abc^^##1100',
	database: 'swift-gift'
})

connection.connect();

//STORE OUR MODEL INSIDE PROGRAM

var model = '{"product":[], "merchant":[], "category":[]}';

	model = JSON.parse(model);

//QUERY FUNCTION

var getData = function(tableName) 
{

	var query = 'SELECT * FROM `'+tableName+'`';

	connection.query(query, function(err, rows, fields) 
	{
		if(err)
		{
			console.log(err);
		};
		if(rows && tableName === 'product') 
		{
			for (var i = rows.length - 1; i >= 0; i--) 
			{
				var cat = rows[i].categoryID;

				if(cat) 
				{
					cat = JSON.parse(cat);
				}
				else
				{
					cat = []
				}
				rows[i].categoryID = cat;
			};
		};
		model[tableName] = rows;

	});

}

//UPDATE PROGRAM CACHE WITH A SMALL INTERVAL

setInterval(getData, 10000, 'product')

setInterval(getData, 30000, 'merchant')

setInterval(getData, 50000, 'category')

//SINGLE DATA ROUTE

router.get('/store/:model/:id?', function(req, res) 
{
	var id = req.params.id
	var modelName = req.params.model
	var newData = []

	if(modelName == 'categories')
	{
		modelName = 'category';
	}
	else
	{
		modelName = modelName.slice(0, - 1);
	}

	var m = model[modelName]

	if(id != null) 
	{
		for (var i = m.length - 1; i >= 0; i--) 
		{

			if(m[i].id == id)
			{
				newData.push(m[i])
			}

		}
	}
	else 
	{
		newData = m;
	}

	var EmberModel = '{"'+modelName+'":[]}';
		EmberModel = JSON.parse(EmberModel);
		EmberModel[modelName] = newData;

	res.send(EmberModel)

});

module.exports = router;
