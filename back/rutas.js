const router = require('express').Router();
const MovieController = require('./controladores/MovieController');
const ClasificationController = require('./controladores/ClasificationController');

// Rutas de peliculas
router.route('/peliculas')
	.get(MovieController.index)
	.post(MovieController.store);

router.route('/pelicula/:id')
	.get(MovieController.show)
	.put(MovieController.update)
	.delete(MovieController.drop);

// Rutas de clasificaciones
router.route('/clasificaciones')
	.get(ClasificationController.index)
	.post(ClasificationController.store);

router.route('/clasificacion/:id')
	.get(ClasificationController.show)
	.put(ClasificationController.update)
	.delete(ClasificationController.drop);

module.exports = router;