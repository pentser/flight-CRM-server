const {Router}=require('express');
const adminController = require('../controllers/adminController');

const router = Router();

router.get('/get_all_customers', adminController.get_all_customers);
router.get('/get_all_tickets', adminController.get_all_tickets);

module.exports=router;


