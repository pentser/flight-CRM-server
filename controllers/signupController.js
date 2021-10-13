const {trx_keeper}=require('../utils/transactionKeeper');
const logger=require('../utils/logger');
const { trySignup } = require('../services/login-service');



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
      let {userData,token}=await trySignup(params);
       if(token) {
        res.cookie('jwt', token, { httpOnly: true, maxAge: config.get('ttl')*1000 });
        res.cookie('user',{username,email,rule}=userData,{ httpOnly: true, maxAge: config.get('ttl')*1000 })
        res.status(200).json({ token,username,email,rule});
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



