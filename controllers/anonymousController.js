const bl= require('../bl/anonymous_bl');
const {trx_keeper}=require('../utils/transactionKeeper');
const logger=require('../utils/logger');




// controller actions
get_all_countries = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllCountries', paramsAr);
        if(action) {
          result=await bl.getAllCountries();
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_all_countries:,${e}`
  });
    }
    
  }

  get_all_flights = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllCountries', paramsAr);
        if(action) {
          result=await bl.getAllFlights();
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_all_flights:,${e}`
  });
    }
    
  }

  get_arrival_flights = async (req, res) => {
    
    try {
        
      params=req.query;
      const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getArrivalFlights', paramsAr);
        if(action) {
          result=await bl.getArrivalFlights(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_arrival_flights:,${e}`
  });
    }
    
  }

  get_departure_flights = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getDepartureFlights', paramsAr);
        if(action) {
          result=await bl.getDepartureFlights(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_departure_flights:,${e}`
  });
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
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_all_airlines_join:,${e}`
  });
    }
    
  }

  get_flight_by_id = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getFlightById', paramsAr);
        if(action) {
          result=await bl.getFlightById(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_flight_by_id:,${e}`
  });
    }
    
  }

  get_airline_by_id = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getAirlineById', paramsAr);
        if(action) {
          result=await bl.getAirlineById(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_airline_by_id:,${e}`
  });
    }
    
  }

  get_flight_by_airline_id = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getFlightByAirlineId', paramsAr);
        if(action) {
          result=await bl.getFlightByAirlineId(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_flight_by_airline_id:,${e}`
  });
    }
    
  }


  get_flights_by_parameters = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getFlightsByParameters', paramsAr);
        if(action) {
          result=await bl.getFlightByParameters(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  get_flights_by_parameters:,${e}`
  });
    }
    
  }

  check_username_availability = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'checkUsernameAvailability', paramsAr);
        if(action) {
          result=await bl.checkUsernameAvailability(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e);
     logger.log({
      level: 'error',
     message: `error  check_username_availability:,${e}`
  });
    }
    
  }




module.exports={
    get_all_countries,
    get_all_flights,
    get_arrival_flights,
    get_departure_flights,
    get_all_airlines_join,
    get_flight_by_airline_id,
    get_airline_by_id,
    get_flight_by_id,
    get_flights_by_parameters,
    check_username_availability,


}