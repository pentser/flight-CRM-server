const {Router}=require('express');
const adminController = require('../controllers/adminController');
const clientActionController=require('../controllers/clientActionController')



const router = Router();


router.post('/insert_airline',adminController.insert_airline);
router.put('/update_airline',adminController.update_airline);
router.delete('/delete_airline',adminController.delete_airline);

router.put('/update_customer',adminController.update_customer);
router.delete('/delete_customer',adminController.delete_customer);

router.get('/get_user_by_id', adminController.get_user_by_id);
router.get('/get_admin_by_user', adminController.get_admin_by_user);



router.get('/get_all_users', adminController.get_all_users);
router.get('/get_all_customers', adminController.get_all_customers);
router.get('/get_all_tickets', adminController.get_all_tickets);

router.get('/get_all_trasactions',clientActionController.get_all_transactions)



module.exports=router;


