const { connect } = require('mongoose');

module.exports = async function () {
	try {
		await connect('mongodb+srv://mike:26543317@cluster0.qjwwb.mongodb.net/prueba?retryWrites=true&w=majority', {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false
		});
	} catch (_) {
		return console.error('Ha ocurrido un error conectando con la base de datos');
	}

	return console.info('Se ha conectado a la base de datos exitosamente');
}