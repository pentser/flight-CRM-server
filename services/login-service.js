const bl=require('../bl/login_bl');
 const jwt=require('jsonwebtoken');
 const config=require('config');




const tryLogin = async (params)=> {

    let token=null;
    let typeOfUser={};
   try {
    const res=await bl.getUserByUser(params);

    const user=res.rows[0];
     // if user exist
    if(user) {
         // if password are equal
        if(user.password===params.password) {

            switch (user.rule) {
                case "Customer":
                     typeOfUser=await bl.getCustomerByUser(user);
                    break;
                case "Airline":
                    typeOfUser=await bl.getAirlineByUser(user);
                    break;
                case "Admin":
                    typeOfUser=await bl.getAdminByUser(user);
                    break;
                default:
                    //anonymous typeOfUser={}            
                    break;
            }
              
           token=createToken(typeOfUser.rows[0]);
        }
        else {
            throw Error("incorrect user")
        }
    }
    else {
      
        throw Error("incorrect password")
    }

    return token;

} catch(e) {
    throw Error(e);
}
}

 const createToken = (typeOfUser) => {
  return jwt.sign(typeOfUser, config.get('privateKey'), {
    expiresIn: config.get("ttl")
  });
}; 




module.exports={
    tryLogin
}