export interface Product{
    name:string,
    price:number,
}

let products:Product[] = [
    {
    name: "Cheese",
    price: 99,
},
{
    name: "Beef Wellington",
    price: 250,
},
{
    name: "California Roll",
    price: 7.50,
}
]



export function calcAverageProductPrice(products: Product[]):number {
    let total = 0;
    if(products.length = 0){
        return 0;
    }
    for(let item of products){
        total += item.price
    }
    total / products.length
    return total;
}

calcAverageProductPrice(products)

let calculate = calcAverageProductPrice

console.log(calculate)

