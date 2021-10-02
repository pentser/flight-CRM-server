const admin_deo=require('../admin_deo');

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

 module.exports={
     getAllCustomers,
     getAllTickets
 }