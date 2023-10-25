class Person{
    Name;
    age;
    constructor(name,age)
    {
      this.name=name;
      this.age=age;
    }
    getDetails()
    {
        if(this.Name==undefined && this.age==undefined)
           return `Name: Unknown, Age: 0`;
           else{
             return `Name: ${this.name}, Age:${this.age}`;
           }
    }
}
const person1=new Person('Mithun',20);

console.log(person1.getDetails());//Name:Mithun, Age:20;

const person2=new Person();
console.log(person2.getDetails())//Name:Unknown , Age:0;