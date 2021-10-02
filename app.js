const logger=require('./utils/logger');
const mongoose = require('mongoose');

/* logger.log({
    level: 'info',
    message: 'open flightCRM application'
  }); */

  const express=require('express');
  const anonymousRoutes=require('./routes/anonymousRoutes');
  const cors=require('cors');
  const app=express();
  const port=3000;

  app.use(express.json());
  app.use(cors({
    origin:'*'
  }))

  // database connection
const dbURI = 'mongodb+srv://eli:Lvvf3gzFdKn8KuC@int2021.xduzl.mongodb.net/node-auth';


  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log(result.connection) ;
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

  app.use('/anonymous/api',anonymousRoutes);
  
