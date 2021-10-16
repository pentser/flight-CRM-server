const logger=require('./utils/logger');
const mongoose = require('mongoose');

/* logger.log({
    level: 'info',
    message: 'open flightCRM application'
  }); */

  const express=require('express');
  const anonymousRoutes=require('./routes/anonymousRoutes');
  const adminRoutes=require('./routes/adminRoutes');
  const loginRoutes=require('./routes/loginRoutes');
  const signupRoutes=require('./routes/signupRoutes');
  const airlineRoutes=require('./routes/airlinesRoutes');
  const customerRoutes=require('./routes/customersRoutes');

  const cookieParser = require('cookie-parser');
  const { requireAuth, checkUser,isLogin } = require('./middleware/authMiddleware')
  const cors=require('cors');
  const app=express();
  const port=3000;


  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({extended:true}));
  
  app.use(cors({
    origin:'*',
    credentials: 'include',
  }))

  // database connection
const dbURI = 'mongodb+srv://eli:Lvvf3gzFdKn8KuC@int2021.xduzl.mongodb.net/node-auth';


  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    //console.log(result.connection) ;
    app.listen(3000, () =>
    {
      console.log(`click on http://localhost:${port}`);
       logger.log({
                    level: 'info',
                   message: `connected to host on port: ${port}`
}); 
      
    })
  })
  .catch((err) => {
    logger.log({
      level: 'error',
     message: `error connect to server:,${err}`
  });
});

  //app.get( '*',checkUser);
  app.use('/',loginRoutes);
  app.use('/',signupRoutes);
  app.use('/anonymous/api',anonymousRoutes);
  app.use('/admin/api',adminRoutes); 
  app.use('/customers/api',customerRoutes);
  app.use('/airlines/api',airlineRoutes);





 

  

