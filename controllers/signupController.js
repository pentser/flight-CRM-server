const {trx_keeper}=require('../utils/transactionKeeper');
const logger=require('../utils/logger');
const { trySignup } = require('../services/login-service');


// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'secret key', {
    expiresIn: maxAge
  });
};

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { user: '', password: '' };

  // incorrect user
  if (err.message === 'incorrect user') {
    errors.user = 'That user is not sinout';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that user is already signin';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}


signup_get = async (req, res) => {
  
  try {
      
      const paramsAr=[];
      const action= await trx_keeper(req.url,'signup_get', paramsAr);
      if(action) {
       // result=await bl.login_get();
        //res.send(result);
       req.send(req.url);

      }     
    
  }catch(e) {
   console.log(e);
   logger.log({
    level: 'error',
   message: `error  signup_get:,${e}`
});
  }
  
}

signup_post = async (req,res) => {
    
  try {
      params=req.body;
      const paramsAr=Object.values(params)
      await trx_keeper(req.url,'signup',paramsAr);
      token=await trySignup(params);
       if(token) {
        res.cookie('jwt', token, { httpOnly: true, maxAge: config.get('ttl')*1000 });
        res.status(200).json({ token});
      }
      else{
 
        res.status(400).json({err:"invalid signup"})
      }
     
    
  }catch(e) {
   console.log(e);
   logger.log({
    level: 'error',
   message: `error  signup_post:,${e}`
});
  }
}



module.exports={

    signup_get,
    signup_post

  
}



