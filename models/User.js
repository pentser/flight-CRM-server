const bcrypt = require('bcrypt');
const adminDeo=require('../admin_deo');




class User {
   id;
   username;
   password;
   email;
   rule;
   constructor(_user,_password,_email,_rule){

       this.username=_user;
       this.password=_password;
       this.email=_email;
       this.rule=_rule;
   }

   //private class
   async _save() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
   }

   static async findOne(user) {
     // getUserByUser
     const result=await adminDeo.getUserByUser(user);
     // if found the user
     if(result.rows.length==1) {
       return result.rows
     }
   
     else return null;
        
   }

   static async findById(id) {
    // getUserById
    const result=await adminDeo.getUserById(id);
    // if found the user
    if(result.rows.length==1)
       return result.rows;
    else return null;
       
  }

   static async login() {
     this._save();
     const user = await findOne(this.username);
     if (user) {
       const auth = await bcrypt.compare(password, user.password);
       if (auth) {
         return user;
       }
       throw Error('incorrect password');
     }
     throw Error('incorrect email');
   };

   }



module.exports=User