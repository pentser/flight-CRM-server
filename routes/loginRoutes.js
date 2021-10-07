const { Router } = require('express');
const loginController = require('../controllers/loginController');

const router = Router();


router.post('/login',loginController.login_post);
  
router.get('/login',loginController.login_get);

router.get('/logout',loginController.logout_get)


  module.exports=router;
    