const rawRepo=require('./data/raw-repo');

const getAllFlights=async () => {
    try {
     const result=await rawRepo.getRowResult(`select * from sp_get_all_flights()`);
     return result;
    } catch(e)
    {
        console.log(e.message)
    }
 }

 module.exports={
     getAllFlights
 }
