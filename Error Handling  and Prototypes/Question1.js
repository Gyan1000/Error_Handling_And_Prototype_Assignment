function convertToNumber(input)
{
    try{
         let number=+input;
        if(isNaN(number))
            throw new Error()
       return number;   
    }
    catch
    {
       console.log('invalid Number')
    }
}
console.log(convertToNumber(123));//Output: 123
console.log(convertToNumber("abc"));//Output: Invalid Number