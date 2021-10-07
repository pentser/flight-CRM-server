const bl= require('../bl/airline_bl');
const {trx_keeper}=require('../utils/transactionKeeper');



// controller actions

  update_airline = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'updateairline',paramsAr);
        result=await bl.updateAirline(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  insert_flight = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'insertFlight',paramsAr);
        result=await bl.insertFlight(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  update_flight = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'updateFlight',paramsAr);
        result=await bl.updateFlight(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  delete_flight = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'deleteFlight',paramsAr);
        result=await bl.deleteFlight(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  get_airline_by_user = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'getAirlineByUser',paramsAr);
        result=await bl.getAirlineByUser(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }



  module.exports={
   
      update_airline,
      insert_flight,
      update_flight,
      delete_flight, 
      get_airline_by_user  
  }
