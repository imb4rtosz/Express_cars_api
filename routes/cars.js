import express from 'express';

import { getCars, createCar, getCar, deleteCar, updateCar } from '../controllers/cars.js';

const router = express.Router();

router.get('/', getCars);

router.post('/', createCar);

router.get('/:id', getCar);

router.delete('/:id', deleteCar);

router.patch('/:id', updateCar);

export default router;