const {trx_keeper}=require('../utils/transactionKeeper');
//const jwt = require('jsonwebtoken');
//const User = require("../models/User");
const bl= require('../bl/login_bl');
const config=require('config');
const {tryLogin} =require('../services/login-service');


// handle errors
/* const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { user: '', password: '' };
  
    // incorrect email
    if (err.message === 'incorrect user') {
      errors.email = 'That user is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
    // duplicate user error
    if (err.code === 11000) {
      errors.user = 'that user is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
    return errors;
  } */

/* // create json web token
const maxAge = config.get('ttl') //3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, config.get('privateKey'), {
    expiresIn: maxAge
  });
}; */



login_post = async (req,res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'login',paramsAr);
        token=await tryLogin(params);
         if(token) {
          res.cookie('jwt', token, { httpOnly: true, maxAge: config.get('ttl')*1000 });
          res.status(200).json({ user: user.rows});
        }
        else{
   
          res.status(400).json({err:"not found"})
        }
       
      
    }catch(e) {
     console.log(e)
    }
  }

login_get = async (req, res) => {
  
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'login_get', paramsAr);
        if(action) {
         // result=await bl.login_get();
          //res.send(result);
         req.send(req.url);
  
        }     
      
    }catch(e) {
     console.log(e)
    }
    
  }

logout_get= async (req,res) =>{

  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');

}


module.exports={
    login_post,
    login_get,
    logout_get
}



