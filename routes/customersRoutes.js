const { Router } = require('express');
const customerController = require('../controllers/customerController');

const router = Router();

router.get('/',(req,res)=>{
    res.send('customer api page')
})

router.get('/get_customer_by_id', customerController.get_customer_by_id);

router.get('/get_customer_by_user',customerController.get_customer_by_user)

router.get('/get_ticket_by_customer', customerController.get_ticket_by_customer);

router.put('/update_customer',customerController.update_customer);

router.post('/insert_ticket',customerController.insert_ticket);

router.put('/update_ticket',customerController.update_ticket);

router.delete('/delete_ticket',customerController.delete_ticket);


/**
*  @swagger
*   /airlines/api/get_country_by_id?={id}:
*     get:
*       summary: Gets a country by id
*       tags: [airlines]
*       parameters:
*         - in: query
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The country id
*       responses:
*         "200":
*           description: Get The row data of the country.
*           content:
*             application/json:
*         "404":
*           description: country id not found.
*/
router.get('/get_country_by_id',customerController.get_country_by_id);





module.exports = router;