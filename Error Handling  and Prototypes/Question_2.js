function getPerson(person)
{ 
   
    try{ 
    if(typeof(person.name)!="string" || typeof(person.age)!="number")
      {
        throw Error('Invalid Parameter type')
      }
     else
      return `Name: ${person.name}, Age: ${person.age}`;
    }
    catch(error)
    {
        console.log(error.message);
    }
   // console.log(person.name ,typeof(person.age))
   
}
console.log(getPerson({name:"Mithun",age:20})); //Output: Name:Mithun , Age:20;
console.log(getPerson({name:"Mithun"})); //Output: Invalid Parameter type;
console.log(getPerson(["name","Mithun"])); //Output: Invalid Parameter type;