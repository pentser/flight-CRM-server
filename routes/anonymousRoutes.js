const {Router}=require('express');
const anonymousController = require('../controllers/anonymousController');


const router = Router();
router.get('/get_all_flights', anonymousController.get_all_flights);
router.get('/get_all_countries', anonymousController.get_all_countries);
router.get('/get_all_airlines_join', anonymousController.get_all_airlines_join);


module.exports=router;