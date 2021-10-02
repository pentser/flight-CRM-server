const rawRepo=require('./data/raw-repo');

//customers table
const getAllCustomers=async () => {
    try {
     const result=await rawRepo.getRowResult(`select * from sp_get_all_customers()`);
     return result;
    } catch(e)
    {
        console.log(e.message)
    }
 }

 const getAllTickets=async () => {
    try {
     const result=await rawRepo.getRowResult(`select * from sp_get_all_tickets()`);
     return result;
    } catch(e)
    {
        console.log(e.message)
    }
 }

 module.exports={
     getAllCustomers,
     getAllTickets,
 }