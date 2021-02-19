const Movie = require('../modelos/Movie');

module.exports = {
	index: async function (rq, rs) {
		const peliculas = await Movie.find();

		return rs.json(peliculas);
	},

	store: async function (rq, rs) {
		let { name, director, clasification } = rq.body;

		const pelicula = await Movie.create({ name, director, clasification });

		return rs.status(201).json(pelicula);
	},

	show: async function (rq, rs) {
		let pelicula = await Movie.findById(rq.params.id).orFail(
			() => rs.status(404).json({'mensaje': 'No encontrado'})
		);

		return rs.json(pelicula);
	},

	update: async function (rq, rs) {
		let pelicula = await Movie.findByIdAndUpdate(rq.params.id, rq.body).orFail(
			() => rs.status(404).json({'mensaje': 'No encontrado'})
		);

		if (pelicula != null) {
			return rs.json(await Movie.findById(rq.params.id));
		} 

		return rs.status(500).json({mensaje: 'No sucedio ningún cambio en el servidor'});
	},

	drop: async function (rq, rs) {
		let pelicula = await Movie.findByIdAndDelete(rq.params.id).orFail(
			() => rs.status(404).json({'mensaje': 'No encontrado'})
		);

		if (pelicula != null) {
			return rs.json(pelicula);
		}

		return rs.status(500).json({mensaje: 'No sucedio ningún cambio en el servidor'});
	},
}