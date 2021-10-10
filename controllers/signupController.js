const {trx_keeper}=require('../utils/transactionKeeper');

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
   console.log(e)
  }
  
}

signup_post = async (req, res) => {
  const { user,password,email,rule } = req.body;

  try {
    
    const user = new User(user, password,email,rule);
    const token = createToken(user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}



module.exports={

    signup_get,
    signup_post

  
}



