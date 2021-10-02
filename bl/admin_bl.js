
const admin_deo=require('../admin_deo');



const insertCountry= async (params)=>{
    const {name}=params;
    try{
       const res=await admin_deo.insertCountry(name);
       return res;

    }catch(e){
       console.log (e.message)
    }


}

const updateCountry= async (params)=>{
   const {id,name}=params;
   try{
      const res=await admin_deo.updateCountry(id,name);
      return res;

   }catch(e){
      console.log (e.message)
   }


}

const deleteCountry=async (params)=>{
   const {id}=params
   try{
       const res=await admin_deo.deleteCountry(id);
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
 
    insertCountry,
    updateCountry,
    deleteCountry,

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