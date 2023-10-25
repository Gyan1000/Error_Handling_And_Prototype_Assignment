class User{
    name;
    password;
    constructor(user,password)
    {
        this.name=this.name;
        this.password=this.password;
    }
   checkDigit(password)
    {
         return /\d/.test(password);
       
    }
    checkAlphabet(password)
    {
     return /[A-Z]/.test(password);
    }
 
 setPassword(password)
  {
      try{
         
        if(password.length<8 || this.checkDigit(password)==false || this.checkAlphabet(password)==false)
           {
              throw Error('Password must be 8 character long and contain at least one number and one capital letter');
           }
       else{
             this.password=password;
          }
       }
      catch(error)
      {
          console.log(error.message)
      }
  }

   getPassword()
   {
    return "********";
   }
}

const user =new User('Shri_Ram',"Password123");

user.setPassword("myPassword");// Output: Password must be 8 character long and contain at least one number and one capital letter
user.setPassword("MyPassword");// Output: Password must be 8 character long and contain at least one number and one capital letter
user.setPassword("MyPassword123");
console.log(user.getPassword());
