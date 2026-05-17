type Product={
    id:number;
    name:string;
    price:number;
    stock: number;
    color?: string;
}

// type ProductSummary={
//     id:number;
//     name:string;
//     pricee:string
// }
type ProductSummary=Pick<Product,"id"|"name" | "price">

type ProductWithoutStock=Omit<Product,"stock"|"color">

type ProductWithColor=Required<Product>

type OptionalProduct=Partial<Product>

type ProductReadOnly=Readonly<Product>


const emptyObj:Record<string,unknown>={

}
const product1:ProductWithoutStock={
    id:222,
    name:"Mouse",
    price:3434
}