const bl= require('../bl/admin_bl');
const {trx_keeper}=require('../utils/transactionKeeper');



// controller actions

  
  insert_airline = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'insertAirline',paramsAr);
        result=await bl.insertAirline(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  update_airline = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'updateAirline',paramsAr);
        result=await bl.updateAirline(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  delete_airline = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'deleteAirline',paramsAr);
        result=await bl.deleteAirline(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  insert_customer = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'insertCustomer',paramsAr);
        result=await bl.insertCustomer(params);
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

  delete_customer = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'deleteCustomer',paramsAr);
        result=await bl.deleteCustomer(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  get_all_users = async (req, res) => {
    
    try {
        
        const paramsAr=[];
        const action= await trx_keeper(req.url,'getAllUsers', paramsAr);
        if(action) {
          result=await bl.getAllUsers();
          res.send(result);

        }
      
      
    }catch(e) {
     console.log(e)
    }
    
  }

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

  get_user_by_id = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'getUserById',paramsAr);
        result=await bl.getUserById(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }

  
  get_admin_by_user = async (req, res) => {
    
    try {
        params=req.body;
        const paramsAr=Object.values(params)
        await trx_keeper(req.url,'getAdminByUser',paramsAr);
        result=await bl.getAdminByUser(params);
        res.send(result);
      
    }catch(e) {
     console.log(e)
    }
    
  }



  

  module.exports={

    insert_airline,
    update_airline,
    delete_airline,

    insert_customer,
    update_customer,
    delete_customer,

    get_all_users,
    get_all_customers,
    get_all_tickets,
    get_user_by_id,
    get_admin_by_user

  }



