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

  module.exports= {
      get_all_flights
  }