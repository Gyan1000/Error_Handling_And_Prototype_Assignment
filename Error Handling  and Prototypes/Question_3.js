class Car{
    company;
    model;
    year;
    constructor(year,company,model)
    {
        this.year=year;
        this.company=company;
        this.model=model;
    }
    getDescription()
    {
        return `this is a ${this.year} ${this.company} ${this.model}`;
    }
}
const myCar=new Car(2022,"Skoda","Rapid");
console.log(myCar.getDescription()); // Output: This is a Skoda Rapid;