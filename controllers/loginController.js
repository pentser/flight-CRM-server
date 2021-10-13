const {trx_keeper}=require('../utils/transactionKeeper');
const config=require('config');
const {tryLogin} =require('../services/login-service');
const logger=require('../utils/logger');





login_post = async (req,res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'login',paramsAr);
        let {userData,token}=await tryLogin(params);
         if(token) {
          res.cookie('jwt', token, { httpOnly: true, maxAge: config.get('ttl')*1000 });
          res.cookie('user',{user,email,rule}=userData,{ httpOnly: true, maxAge: config.get('ttl')*1000 })
          res.status(200).json({ token,user,email,rule});
        }
        else{
   
          res.status(400).json({err:"invalid login"})
        }
       
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  login_post:,${e}`
  });
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
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  login_get:,${e}`
  });
    }
    
  }

logout_get= async (req,res) =>{

  res.cookie('jwt', '', { maxAge: 1 });
  res.cookie('user', '', { maxAge: 1 });
  res.redirect('/');

}


module.exports={
    login_post,
    login_get,
    logout_get
}



