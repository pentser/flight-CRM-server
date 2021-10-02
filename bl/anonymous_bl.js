const anonymous_deo=require('../anonymous_deo');

const  getAllFlights=async ()=>{

    try {
     const res=await anonymous_deo.getAllFlights();
     return res.rows;
    }catch(e){
        console.log (e.message)
 
    }
 }


 const  getAllCountries=async ()=>{

    try {
     const res=await anonymous_deo.getAllCountries();
     return res.rows;
    }catch(e){
        console.log (e.message)
 
    }
 }

 const  getAllAirlinesJoin=async ()=>{

    try {
     const res=await anonymous_deo.getAllAirlinesJoin();
     return res.rows;
    }catch(e){
        console.log (e.message)
 
    }
 }




 module.exports={
     getAllFlights,
     getAllCountries,
     getAllAirlinesJoin
 }