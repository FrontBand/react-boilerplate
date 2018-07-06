import Express from 'express';
import * as moviesControllers from './routes/movies';
import * as actorsControllers from './routes/actors';

const router = new Express.Router();
router.use(Express.json());

router.get('/movies', moviesControllers.fetchMovies);
router.post('/movies', moviesControllers.createMovie);
router.get('/movies/:id', moviesControllers.fetchMovie);
router.put('/movies/:id', moviesControllers.editMovie);
router.delete('/movies/:id', moviesControllers.deleteMovie);

router.get('/actors', actorsControllers.fetchActors);
router.post('/actors', actorsControllers.createActor);
router.get('/actors/:id', actorsControllers.fetchActor);
router.put('/actors/:id', actorsControllers.editActor);
router.delete('/actors/:id', actorsControllers.deleteActor);

export default router;
