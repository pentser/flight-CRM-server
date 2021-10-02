const bl= require('../bl/admin_bl');
const {trx_keeper}=require('../utils/transactionKeeper');



get_all_customers = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllCustomers', paramsAr);
        if(action) {
          result=await bl.getAllCustomers();
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e)
    }
    
  }

  
  get_all_tickets = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllTickets', paramsAr);
        if(action) {
          result=await bl.getAllTickets();
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e)
    }
    
  }

  module.exports={
      get_all_customers,
      get_all_tickets
  }