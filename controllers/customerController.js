const bl= require('../bl/customer_bl');
const {trx_keeper}=require('../utils/transactionKeeper');



// controller actions
get_customer_by_id = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getCustomerById', paramsAr);
        if(action) {
          result=await bl.getCustomerById(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e)
    }
    
  }

  get_country_by_id = async (req, res) => {
    
    try {
        
        params=req.query;
        const paramsAr=Object.values(params)
        const action= await trx_keeper(req.url,'getCountryById', paramsAr);
        if(action) {
          result=await bl.getCountryById(params);
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e)
    }
    
  }




  get_ticket_by_customer = async (req, res) => {
    
    try {
        params=req.query;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'getTicketByCustomer',paramsAr);
        result=await bl.getTicketByCustomer(params)
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }



  update_customer = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'updateCustomer',paramsAr);
        result=await bl.updateCustomer(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  insert_ticket = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'insertTicket',paramsAr);
        result=await bl.insertTiket(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  update_ticket = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'updateTicket',paramsAr);
        result=await bl.updateTicket(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  delete_ticket = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'deleteTicket',paramsAr);
        result=await bl.deleteTicket(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }


  get_customer_by_user = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'getCustomerByUser',paramsAr);
        result=await bl.getCustomerByUser(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }









  

  module.exports={
    get_customer_by_id,
    get_ticket_by_customer,
    update_customer,
    get_customer_by_user,
    delete_ticket,
    update_ticket,
    insert_ticket,
    get_country_by_id


  }



