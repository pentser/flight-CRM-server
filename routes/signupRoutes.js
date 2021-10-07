const { Router } = require('express');
const signUpController = require('../controllers/signupController');

const router = Router();


router.post('/signup',signUpController.signup_post);
  
  router.get('/signup',signUpController.signup_get);


  module.exports=router;
    