const bl=require('../bl/admin_bl');
 const jwt=require('jsonwebtoken');
 const config=require('config');




const tryLogin = async (params)=> {

    let token=null;
    //let typeOfUser={};
   try {
    const res=await bl.getUserByUser(params);

    const user=res.rows[0];
     // if user exist
    if(user) {
         // if password are equal
        if(user.password===params.password) {

         /*    switch (user.rule) {
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
            } */
              
           token=createToken(user.id);
        }
        else {
            throw Error("incorrect password")
        }
    }
    else {
      
        throw Error("incorrect user")
    }

    return token;

} catch(e) {
    throw Error(e);
}
}

const trySignup = async (params)=> {

   
    let token=null;
  
   try {
    const res=await bl.getUserByUser(params);

    const user=res.rows[0];
     // if user exist
    if(user) {
         // if user exists
            throw Error("user exist")    
    }
    else {
        // create user
        const res=await bl.insertUser(params);
        console.log(res);
        if(res) {
            token=createToken(user.id);
        }
        else{
            throw Error("Error insertUser")    
        }
    }

    return token;

} catch(e) {
    throw Error(e);
}
}



 const createToken = (id) => {
  return jwt.sign({id}, config.get('privateKey'), 
    {expiresIn: config.get('ttl')}
  );
}; 




module.exports={
    tryLogin,
    trySignup
}