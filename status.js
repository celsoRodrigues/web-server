module.exports=function(app){
app.listen(app.get('port'), function(){

	console.log('Server started on localhost:'+app.get('port')+'. Press Ctrl+c to kill the server.');

});

}
