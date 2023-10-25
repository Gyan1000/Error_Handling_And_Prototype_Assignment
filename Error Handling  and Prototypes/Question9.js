function numberChecker(nums){
   
    return function(num)
    {
         for(let i=0;i<nums.length;i++)
            {
                if(num==nums[i])
                     return true;
            }
         return false;
    }
}
const nums=[1,2,3,4,5];
const checkNum=numberChecker(nums);
console.log(checkNum(3)); //true;
console.log(checkNum(6)); //false;