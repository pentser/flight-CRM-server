const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config=require('config');


const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, config.get('privateKey'), (err, decodedToken) => {
      if (err) {config.get('privateKey')
        console.log(err.message);
        res.redirect('/login'); // in ajax act differently
      } else {
          // we may here- check the user role ...
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/signout'); // in ajax act differently
  }
};

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token,config.get('privateKey'), async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next(); // ?? bad token
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user; // ? . better user-id, name
          next(); 
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

  module.exports = { requireAuth, checkUser };
