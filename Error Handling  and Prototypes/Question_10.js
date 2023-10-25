var products=[{name:"Shirt", category:"Clothing"},
{name:"Pants", category:"Clothing"},
{name:"Hat", category:"Accessories"},
{name:"Sunglasses", category:"Accessories"}
];
function filterByCategory(products)
{
    
    return function(category)
    {
       const result= products.filter((product)=>{
           if( product.category==category)
                     return product;
        })
        return result;
        
    }
}
var clothingProducts=filterByCategory(products)('Clothing');
console.log(clothingProducts);// output: [{name:'Shirt', category:'Clothing'},{name:'Pants',category:'Clothing'}]