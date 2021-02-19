const { Schema, model } = require('mongoose');

module.exports = model('clasifications', new Schema({
	name: String,
	movies: {
		type: Schema.Types.ObjectId,
		ref: 'movies'
	}
}));