const {Router}=require('express');
const anonymousController = require('../controllers/anonymousController');


const router = Router();
router.get('/get_all_flights', anonymousController.get_all_flights);

module.exports=router;