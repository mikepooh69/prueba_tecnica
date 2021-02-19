const Clasification = require('../modelos/Clasification');

module.exports = {
	index: async function (rq, rs) {
		const clasificaciones = await Clasification.find();

		return rs.json(clasificaciones);
	},

	store: async function (rq, rs) {
		let query = await Clasification.findOne({ name: rq.body.name });

		if (query != null) {
			return rs.status(500).json({ 'mensaje': 'Ya existe una clasificación con ese nombre' });
		}

		let cla = await Clasification.create({
			name: rq.body.name
		});

		return rs.status(201).json(cla);
	},

	show: async function (rq, rs) {
		let clasificacion = await Clasification.findById(rq.params.id).orFail(
			() => rs.status(404).json({ 'mensaje': 'No encontrado' })
		);

		return rs.json(clasificacion);
	},

	update: async function (rq, rs) {
		let clasificacion = await Clasification.findByIdAndUpdate(rq.params.id, rq.body).orFail(
			() => rs.status(404).json({ 'mensaje': 'No encontrado' })
		);

		if (clasificacion != null) {
			return rs.json(await Clasification.findById(rq.params.id));
		}

		return rs.status(500).json({ mensaje: 'No sucedio ningún cambio en el servidor' });
	},

	drop: async function (rq, rs) {
		let clasificacion = await Clasification.findByIdAndDelete(rq.params.id).orFail(
			() => rs.status(404).json({ 'mensaje': 'No encontrado' })
		);

		if (clasificacion != null) {
			return rs.json(clasificacion);
		}

		return rs.status(500).json({ mensaje: 'No sucedio ningún cambio en el servidor' });
	},
}