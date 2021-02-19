const database 	= require('./database');
const server 	= require('./server');

// Lanzar servidor
(async function () {
	await database();
	await server.listen(server.get('port'));
	
	console.log(`Servidor corriendo en el puerto ${server.get('port')}`)
})()