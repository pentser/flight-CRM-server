const bl= require('../bl/anonymous_bl');
const {trx_keeper}=require('../utils/transactionKeeper');

  get_all_flights = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllCountries', paramsAr);
        if(action) {
          result=await bl.getAllFlights();
          res.send(result);
        }
    
      
    }catch(e) {
     console.log(e)
    }
    
  }

  get_all_countries = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllCountries', paramsAr);
        if(action) {
          result=await bl.getAllCountries();
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e)
    }
    
  }

  get_all_airlines_join = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllAirlinesJoin', paramsAr);
        if(action) {
          result=await bl.getAllAirlinesJoin();
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e)
    }
    
  }





  module.exports= {
      get_all_flights,
      get_all_countries,
      get_all_airlines_join
  }