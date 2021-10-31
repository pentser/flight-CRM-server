const { Router } = require('express');
const adminController = require('../controllers/adminController');
const clientActionController=require('../controllers/clientActionController')

const router = Router();


router.post('/insert_country',adminController.insert_country);
router.put('/update_country',adminController.update_country);
router.delete('/delete_country',adminController.delete_country);

router.post('/insert_airline',adminController.insert_airline);
router.put('/update_airline',adminController.update_airline);
router.delete('/delete_airline',adminController.delete_airline);


router.put('/update_customer',adminController.update_customer);
router.delete('/delete_customer',adminController.delete_customer);


/**
*  @swagger
*   /airlines/api/get_user_by_id?={id}:
*     get:
*       summary: Gets a user by id
*       tags: [airlines]
*       parameters:
*         - in: query
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The user id
*       responses:
*         "200":
*           description: Get The row data of the user.
*           content:
*             application/json:
*         "404":
*           description: user id not found.
*/
router.get('/get_user_by_id', adminController.get_user_by_id);
router.get('/get_admin_by_user', adminController.get_admin_by_user);

router.get('/get_all_users', adminController.get_all_users);
router.get('/get_all_customers', adminController.get_all_customers);
router.get('/get_all_tickets', adminController.get_all_tickets);


router.get('/get_all_trasactions',clientActionController.get_all_transactions);







/**
*  @swagger
*   /airlines/api/get_user_by_user?={user}:
*     get:
*       summary: Gets a user by user name
*       tags: [airlines]
*       parameters:
*         - in: query
*           name: user
*           schema:
*             type: string
*           required: true
*           description: The username
*       responses:
*         "200":
*           description: Get The row data of the current user.
*           content:
*             application/json:
*         "404":
*           description: user not found.
*/
router.get('/get_user_by_user', adminController.get_user_by_user);









module.exports = router;