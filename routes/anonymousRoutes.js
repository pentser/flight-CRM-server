const { Router } = require('express');
const anonymousController = require('../controllers/anonymousController');

const router = Router();

router.get('/get_all_countries', anonymousController.get_all_countries);
router.get('/get_all_flights', anonymousController.get_all_flights);
router.get('/get_arrival_flights', anonymousController.get_arrival_flights);
router.get('/get_departure_flights', anonymousController.get_departure_flights);
router.get('/get_all_airlines_join', anonymousController.get_all_airlines_join);
router.get('/get_flight_by_id', anonymousController.get_flight_by_id);
router.get('/get_flight_by_airline_id', anonymousController.get_flight_by_airline_id);

router.get('/get_flights_by_parameters', anonymousController.get_flights_by_parameters);





module.exports=router;