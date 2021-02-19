const { Schema, model } = require('mongoose');

module.exports = model('movies', new Schema({
	name: String,
	director: String,
	clasification: {
		type: Schema.Types.ObjectId,
		ref: 'clasifications'
	}
}));