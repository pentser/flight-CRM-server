
const customer_deo=require('../customer_deo');
const admin_deo= require('../admin_deo');
const airline_deo=require('../airline_deo');



const getUserByUser= async (params)=>{
   const {user}=params;
   try{
      const res=await admin_deo.getUserByUser(user);
      return res;
 
   }catch(e){
      console.log (e.message);
      return new Error('username not exists')
   }
 
 }

 const getCustomerByUser= async (params)=>{
    const {username}=params;
    try{
       const res=await customer_deo.getCustomerByUser(username);
       return res;
  
    }catch(e){
       console.log (e.message);
       return new Error('username not exists')
    }
}



const getAirlineByUser= async (params)=>{
    const {username}=params;
    try{
       const res=await airline_deo.getAirlineByUserByUser(username);
       return res;
  
    }catch(e){
       console.log (e.message);
       return new Error('username not exists')
    }
}
   
    const getAdminByUser= async (params)=>{
        const {username}=params;
        try{
           const res=await admin_deo.getAdminByUser(username);
           return res;
      
        }catch(e){
           console.log (e.message);
           return new Error('username not exists');
        }
      
      }
     





module.exports={

   getUserByUser,
   getCustomerByUser,
   getAirlineByUser,
   getAdminByUser, 
}

