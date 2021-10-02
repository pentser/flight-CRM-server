/* const admin_deo=require('../admin_deo');

const  getAllCustomers=async ()=>{

    try {
     const res=await admin_deo.getAllCustomers();
     return res.rows;
    }catch(e){
        console.log (e.message)
 
    }
 }

 const  getAllTickets=async ()=>{

    try {
     const res=await admin_deo.getAllTickets();
     return res.rows;
    }catch(e){
        console.log (e.message)
 
    }
 }
 */
 
const admin_deo=require('../admin_deo');


const insertFlight= async (params)=>{
    const {airline_id,origin_country_id,destination_country_id,departure_time,landing_time
   ,remaining_tickets}=params;
    try{
       const res=await admin_deo.insertFlight(airline_id,origin_country_id,destination_country_id,departure_time,landing_time,remaining_tickets);
       return res;

    }catch(e){
       console.log (e.message)
    }


}

const updateFlight= async (params)=>{
   const {id,airline_id,origin_country_id,destination_country_id,departure_time,landing_time
  ,remaining_tickets}=params;
   try{
      const res=await admin_deo.updateFlight(id,airline_id,origin_country_id,destination_country_id,departure_time,landing_time,remaining_tickets);
      return res;

   }catch(e){
      console.log (e.message)
   }


}

const deleteFlight=async (params)=>{
   const {id}=params
   try{
       const res=await admin_deo.deleteFlight(id);
       return res;

    }catch(e){
       console.log (e.message)
    }

}

const insertUser= async (params)=>{
  const {user,password,email,rule}=params;
  try{
     const res=await admin_deo.insertUser(user,password,email,rule);
     return res;

  }catch(e){
     console.log (e.message)
  }


}

const updateUser= async (params)=>{
 const {id,user,password,email,rule}=params;
 try{
    const res=await admin_deo.updateUser(id,user,password,email,rule);
    return res;

 }catch(e){
    console.log (e.message)
 }


}

const deleteUser=async (params)=>{
 const {id}=params
 try{
     const res=await admin_deo.deleteUser(id);
     return res;

  }catch(e){
     console.log (e.message)
  }

}

const  getAllUsers=async ()=>{

  try {
   const res=await admin_deo.getAllUsers();
   return res.rows;
  }catch(e){
      console.log (e.message)

  }
}

const  getAllTickets=async ()=>{

  try {
   const res=await admin_deo.getAllTickets();
   return res.rows;
  }catch(e){
      console.log (e.message)

  }
}

const  getAllCustomers=async ()=>{

  try {
   const res=await admin_deo.getAllCustomers();
   return res.rows;
  }catch(e){
      console.log (e.message)

  }
}

const getUserById= async (params)=>{
  const {id}=params;
  try{
     const res=await admin_deo.getUserById(id);
     return res;

  }catch(e){
     console.log (e.message)
  }


}

const getAdminByUser= async (params)=>{
  const {user}=params;
  try{
     const res=await admin_deo.getAdminByUser(user);
     return res;

  }catch(e){
     console.log (e.message)
  }


}


const getAllTransactions=async ()=>{

  try {
   const res=await admin_deo.getAllTransactions();
   return res
  }catch(e){
      console.log (e.message)

  }
}

 
module.exports={
    insertFlight,
    updateFlight,
    deleteFlight,

    insertUser,
    updateUser,
    deleteUser,

    getAllUsers,
    getAllTickets,
    getAllCustomers,
    getUserById,
    getAdminByUser,

    getAllTransactions


}