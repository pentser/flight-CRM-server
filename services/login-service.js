const bl=require('../bl/login_bl');
 const jwt=require('jsonwebtoken');
 const config=require('config');

/*  // handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { user: '', password: '' };
  
    // incorrect user
    if (err.message === 'incorrect user') {
      errors.user = 'That user is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
    return errors;
  } */




const tryLogin = async (user,password)=> {
 
    const params={
        user,
        password
    }
    let token=null;
    let typeOfUser={};
   try {
    const user=await bl.getUserByUser(params);

     // if user exist
    if(user) {
        console.log("type",typeof user)
         // if password are equal
        if(user.password===password) {

            switch (user.rule) {
                case value:"Customer"
                     typeOfUser=bl.getCustomerByUser(user);
                    break;
                case value:"Airline"
                    typeOfUser=bl.getAirlineByUser(user);
                    break;
                case value:"Admin"
                    typeOfUser=bl.getAdminByUser(user);
                    break;
                default:
                    //anonymous typeOfUser={}            
                    break;
            }
              
           token=createToken(typeOfUser);
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