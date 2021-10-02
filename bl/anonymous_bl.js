const anonymous_deo=require('../anonymous_deo');

const  getAllFlights=async ()=>{

    try {
     const res=await anonymous_deo.getAllFlights();
     return res.rows;
    }catch(e){
        console.log (e.message)
 
    }
 }


 module.exports={
     getAllFlights
 }