var express=require('express');
var mystatus=require('./status');
var handlebars=require('express-handlebars').create({
defaultLayout:'main',
extname:'.hbs'
});
var app=express();
//config port
app.set('port', process.env.PORT||3000);

//config and set engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//routes
app.get('/', function(req, res){
	var name='Celso';
	res.render('home', { nome:name});

});

app.get('/about', function(req, res){

	res.render('about');

});

app.use(express.static(__dirname+'/public'));

//404
app.use(function(req, res, next){

	res.status(404);
	res.render('404');

});

//500
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');

});


//app.listen(app.get('port'), function(){

//	console.log('Server started on localhost:'+app.get('port')+' press Ctrl+c to close.');

//});

mystatus(app);
