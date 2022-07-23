export type Size = 'S' | 'M' | 'L' | 'XL';
export type UserID = string | number;

interface Product {
    id: UserID;
    title: string;
    createdAT: Date;
    stock: number;
    size?: Size;
}


const productss: Product[] = [];

productss.push({
    id: 1,
    title: 'p1',
    createdAT: new Date(),
    stock: 90
})

const addProduct = (product: Product) => {
    productss.push(product);
}