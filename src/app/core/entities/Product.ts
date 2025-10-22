type categories = 'starters' | 'drinks' | 'desserts' | 'mains';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: categories;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}